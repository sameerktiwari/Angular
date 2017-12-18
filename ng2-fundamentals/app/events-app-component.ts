import {Component} from '@angular/core'
import { ProductService } from './products/product.service';

@Component({
    selector: 'events-app',
    
    template: `
    <pm-products></pm-products>
    `,
    providers: [ProductService]
})

export class EventsAppComponent{
     name:  string = "Abhishek";

}