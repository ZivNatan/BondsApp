import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { TableComponent } from "./shared/table/table.component";
import { FiltersComponent } from "./shared/filters/filters.component";
import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortfolioComponent,
    TableComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
