import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { reducer } from './reducers/tutorial.reducer';

import { environment } from '@env/environment';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

import { TokenInterceptor } from './interceptors/token.interceptor';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';

import { services } from './services';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forRoot({
            tutorial: reducer
        })
    ],
    providers: [
        AuthGuard,
        NoAuthGuard,

        ...services,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
