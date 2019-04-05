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
  ngOnInit() {}
}
