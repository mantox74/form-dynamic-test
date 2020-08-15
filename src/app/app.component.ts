import { Component, OnInit } from "@angular/core";
import { SpinnerService } from "./services/spinner.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public spinnerLoading: boolean;
  constructor(private spinner: SpinnerService) {
    this.spinner.isLoading.subscribe(
      (isLoading) => (this.spinnerLoading = isLoading)
    );
  }

  ngOnInit() {
    this.spinner.isLoading.next(true);
    setTimeout(() => {
      //this.spinner.isLoading.next(false);
    }, 3000);
  }
}
