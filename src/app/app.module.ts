import { ConvertMetersPipe } from "./pipes/convert-meters.pipe";
import { ConvertKilometersPipe } from "./pipes/convert-kilometers.pipe";
import { ConvertCentimetersPipe } from "./pipes/convert-centimeters.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    ConvertMetersPipe,
    ConvertKilometersPipe,
    ConvertCentimetersPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
