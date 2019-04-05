import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import "hammerjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  user: any = {};

  constructor(private router: Router) {}
  ngOnInit() {
    // if (window.location.href.indexOf("login") === -1) {
    //   this.user = localStorage.getItem("user");
    //   this.handleNavigation(this.user);
    // }
  }

  handleNavigation(user) {
    if (user) {
      // route  to protfolio
      this.router.navigateByUrl("/portfolio");
    } else {
      // rout to login
      this.router.navigateByUrl("/login");
    }
  }
}
