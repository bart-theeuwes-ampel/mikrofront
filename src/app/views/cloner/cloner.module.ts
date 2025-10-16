import { NgModule } from "@angular/core";
import { CommonModule, TitleCasePipe } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  ButtonGroupModule,
  ToastModule,
  TooltipModule,
  NavModule, 
  TabsModule,
  BadgeModule,
  AlertModule,
} from "@coreui/angular";
import { ClonerRoutingModule } from "./cloner-routing.module";
import { ClonerComponent } from "./cloner.component";
import { GuiGridModule } from "@generic-ui/ngx-grid";

import { NgxSuperSelectModule} from "ngx-super-select";

@NgModule({
  imports: [
    ClonerRoutingModule,
    CardModule,
    CommonModule,
    GridModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    GuiGridModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSuperSelectModule,
    ToastModule,
    TooltipModule,
    NavModule, 
    TabsModule,
    BadgeModule,
    AlertModule,
  ],
  declarations: [ClonerComponent],
  providers: [TitleCasePipe],
})
export class ClonerModule {}
