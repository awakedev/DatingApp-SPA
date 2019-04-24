import { AlertifyService } from "./../services/alertify.service";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private aleritfy: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.aleritfy.success("Logged in successfully");
      },
      error => {
        this.aleritfy.error(error);
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  logOut() {
    localStorage.removeItem("token");
    this.aleritfy.message("logged out");
  }
}
