import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AuthService } from "../services/security/auth-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clone the request and add the access token to headers
        let authRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getAccessToken()}`
            }
        });

        // Check if access token is expired
        if (this.authService.isAccessTokenExpired()) {
            return this.authService.refreshToken().pipe(
                switchMap(() => {
                    // Use the new access token for the original request
                    authRequest = request.clone({
                        setHeaders: {
                            Authorization: `Bearer ${this.authService.getAccessToken()}`
                        }
                    });
                    return next.handle(authRequest);
                })
            );
        } else {
            return next.handle(authRequest);
        }
    }
}
