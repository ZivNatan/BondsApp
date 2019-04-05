import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "portfolio", component: PortfolioComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
