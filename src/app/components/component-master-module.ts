import {NgModule} from "@angular/core";
import {TestFirstComponent} from "./test-first/test-first.component";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations:[
    TestFirstComponent
  ],
  imports:[
    IonicModule,
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    TestFirstComponent
  ]
})
export class ComponentMasterModule {}
