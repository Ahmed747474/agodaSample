import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { route } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { LAYOUT_COMPONENTS } from './layout';

@NgModule({
  declarations: [AppComponent, LAYOUT_COMPONENTS],
  imports: [RouterModule.forRoot(route), SharedModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
