import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  AlertModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  CollapseModule,
  ModalModule,
  TooltipModule,
  ListGroupModule,
} from "@coreui/angular";
import { DevicesGroupRoutingModule } from "./devgroup-routing.module";
import { DevicesGroupComponent } from "./devgroup.component";
import { GuiGridModule } from "@generic-ui/ngx-grid";
import { BadgeModule } from "@coreui/angular";
import { FormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
@NgModule({
  imports: [
    DevicesGroupRoutingModule,
    AlertModule,
    CardModule,
    CommonModule,
    GridModule,
    FormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    GuiGridModule,
    CollapseModule,
    ModalModule,
    BadgeModule,
    TooltipModule,
    MatMenuModule,
    ListGroupModule,
  ],
  declarations: [DevicesGroupComponent],
})
export class DevicesGroupModule {}
