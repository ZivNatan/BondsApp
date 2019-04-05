import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}
  @ViewChild("loginForm") loginForm: ElementRef;

  user = {
    tempPassword: "",
    username: "",
    organizationId: ""
  };
  ngOnInit() {
    console.log(this.loginForm);
    if (JSON.parse(localStorage.getItem("user"))) {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
  }

  onSubmit(f) {
    if (f.valid) {
      this.loginService.register(this.user).subscribe(
        response => {
          this.saveUser();
        },
        err => {
          // in real life this code has err handling function
          this.saveUser();
        }
      );
    }
  }
  saveUser() {
    localStorage.setItem("user", JSON.stringify(this.user));
    this.router.navigateByUrl("/portfolio");
  }
}
