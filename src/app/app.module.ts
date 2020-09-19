import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { NgZorroAntdModule, NZ_I18N, zh_CN, NzFormModule } from "ng-zorro-antd";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { LoginFormComponent } from "./login-form/login-form.component";

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent, ToggleComponent, LoginFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzFormModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
