import { NgModule } from '@angular/core';

import { OrderComponent } from '@app/modules/order/pages/order.component';
import { OrderRoutingModule } from '@app/modules/order/order.routing';

import { SharedModule } from '@app/shared';

@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        SharedModule,

        OrderRoutingModule
    ],
    exports: [],
    providers: [],
})
export class OrderModule {}
