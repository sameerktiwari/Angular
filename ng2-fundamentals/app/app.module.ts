import { NgModule} 
from '@angular/core'

import { BrowserModule } 
from '@angular/platform-browser'

import {FormsModule}
from '@angular/forms'

import { HttpModule} 
from '@angular/http';

import {ConvertToSpacesPipe}
from './shared/convert-to-spaces.pipe'

import {ProductListComponent}
from './products/product-list.component'

import {StarComponent}
from './shared/star.component'

import {EventsAppComponent} 
from './events-app-component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
imports: [BrowserModule,FormsModule,HttpClientModule],
declarations: [EventsAppComponent,ProductListComponent,StarComponent,ConvertToSpacesPipe],
bootstrap: [EventsAppComponent]
    
})

export class AppModule{
}