import { Observable } from 'rxjs';
import { DataService } from '../api/data.service';
import { AuthStateService } from '../authState/auth-state.service';
import { ConfigurationProvider } from '../config/config.provider';
import { LoggerService } from '../logging/logger.service';
import { StoragePersistanceService } from '../storage/storage-persistance.service';
import { UserService } from '../userData/user-service';
import { UrlService } from '../utils/url/url.service';
import { StateValidationService } from '../validation/state-validation.service';
import { TokenValidationService } from '../validation/token-validation.service';
import { CallbackContext } from './callback-context';
import { FlowsDataService } from './flows-data.service';
import { SigninKeyDataService } from './signin-key-data.service';
import * as i0 from "@angular/core";
export declare class FlowsService {
    private readonly urlService;
    private readonly loggerService;
    private readonly tokenValidationService;
    private readonly configurationProvider;
    private readonly authStateService;
    private readonly flowsDataService;
    private readonly signinKeyDataService;
    private readonly dataService;
    private readonly userService;
    private readonly stateValidationService;
    private readonly storagePersistanceService;
    constructor(urlService: UrlService, loggerService: LoggerService, tokenValidationService: TokenValidationService, configurationProvider: ConfigurationProvider, authStateService: AuthStateService, flowsDataService: FlowsDataService, signinKeyDataService: SigninKeyDataService, dataService: DataService, userService: UserService, stateValidationService: StateValidationService, storagePersistanceService: StoragePersistanceService);
    resetAuthorizationData(): void;
    processCodeFlowCallback(urlToCheck: string): Observable<CallbackContext>;
    processSilentRenewCodeFlowCallback(firstContext: CallbackContext): Observable<CallbackContext>;
    processImplicitFlowCallback(hash?: string): Observable<CallbackContext>;
    processRefreshToken(customParams?: {
        [key: string]: string | number | boolean;
    }): Observable<CallbackContext>;
    private codeFlowCallback;
    private implicitFlowCallback;
    private refreshSessionWithRefreshTokens;
    private refreshTokensRequestTokens;
    private codeFlowCodeRequest;
    private callbackHistoryAndResetJwtKeys;
    private callbackStateValidation;
    private callbackUser;
    private publishAuthorizedState;
    private publishUnauthorizedState;
    private handleResultErrorFromCallback;
    private historyCleanUpTurnedOn;
    private resetBrowserHistory;
    static ɵfac: i0.ɵɵFactoryDef<FlowsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<FlowsService>;
}
//# sourceMappingURL=flows.service.d.ts.map