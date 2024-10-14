import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { Observable} from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    getAccessToken() {
        return localStorage.getItem('access_token');
    }

    isAccessTokenExpired(): boolean {
        const expiry = localStorage.getItem('token_expiry');
        return Date.now() > Number(expiry);
    }

    refreshToken(): Observable<any> {
        return this.http.post<any>('/api/refresh-token', {
            accessToken: localStorage.getItem('access_token'),
            refreshToken: localStorage.getItem('refresh_token')
        }).pipe(
            tap((tokens) => {
                localStorage.setItem('access_token', tokens.accessToken);
                localStorage.setItem('refresh_token', tokens.refreshToken);
                localStorage.setItem('token_expiry', this.getTokenExpiry(tokens.accessToken));
            })
        );
    }

    getTokenExpiry(token: string): any {
        const decoded = jwtDecode(token);
        if(decoded?.exp){
            return  decoded.exp * 1000;  // Convert to milliseconds
        }
    }
}
