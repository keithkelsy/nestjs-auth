"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSecurityModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const app_security_service_1 = require("./app-security.service");
const app_security_controller_1 = require("./app-security.controller");
let AppSecurityModule = class AppSecurityModule {
};
exports.AppSecurityModule = AppSecurityModule;
exports.AppSecurityModule = AppSecurityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'SECRET_KEY', // Usa una clave secreta segura
                signOptions: { expiresIn: '1h' }, // Configura la expiración del token
            }),
        ],
        providers: [app_security_service_1.AppSecurityService, jwt_auth_guard_1.JwtAuthGuard], // Agrega JwtAuthGuard aquí
        controllers: [app_security_controller_1.AppSecurityController],
        exports: [jwt_1.JwtModule, app_security_service_1.AppSecurityService, jwt_auth_guard_1.JwtAuthGuard], // Exporta JwtModule para que esté disponible en otros módulos
    })
], AppSecurityModule);
