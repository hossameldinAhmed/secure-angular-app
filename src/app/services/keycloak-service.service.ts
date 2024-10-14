// import { Injectable } from '@angular/core';
// import { KeycloakService } from 'keycloak-angular';
// // import Keycloak, { KeycloakConfig } from "keycloak-js";

// @Injectable({
//   providedIn: 'root'
// })
// export class MyKeycloakService {

//   constructor(private keycloakService: KeycloakService) {

//   }
// public init() {
//     return () =>
//       this.keycloakService.init({
//         config: {
//           url: 'http://localhost:8080/auth',
//           realm: 'Security-Demo',
//           clientId: 'secure-angular-app',
//         },
//         initOptions: {
//           onLoad: 'login-required',  // allowed values 'login-required', 'check-sso';
//           flow: "standard"          // allowed values 'standard', 'implicit', 'hybrid';
//         },
//       });
//   }

//   getToken() {
//     return this.keycloakService.getToken();
//   }

//   logout() {
//     return this.keycloakService.logout();
//   }
// }
//  export function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         url: 'http://localhost:8080/auth',
//         realm: 'Security-Demo',
//         clientId: 'secure-angular-app',
//       },
//       initOptions: {
//         onLoad: 'login-required',  // allowed values 'login-required', 'check-sso';
//         flow: "standard"          // allowed values 'standard', 'implicit', 'hybrid';
//       },
//     });
// }