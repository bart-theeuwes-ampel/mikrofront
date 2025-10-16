import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  SpinnerModule,
  ToastModule,
  ModalModule,
  BadgeModule,
  TooltipModule,
} from "@coreui/angular";
import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./settings.component";
import { GuiGridModule } from "@generic-ui/ngx-grid";

import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    SettingsRoutingModule,
    CardModule,
    CommonModule,
    GridModule,
    FormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    GuiGridModule,
    SpinnerModule,
    ToastModule,
    ModalModule,
    BadgeModule,
    TooltipModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
