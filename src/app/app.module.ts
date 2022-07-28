import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ModuleOneModule } from './moduleOne/module-one.module';
import { ModuleTwoModule } from './moduleTwo/module-two.module';
import { ModuleThreeModule } from './moduleThree/module-three.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModuleOneModule,
    ModuleTwoModule,
    ModuleThreeModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
