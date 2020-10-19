import { Component, OnInit } from "@angular/core";
import { SpinnerService } from "../../services/spinner.service";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent implements OnInit {
  public spinnerLoading: boolean;

  constructor(private spinner: SpinnerService) {
    this.spinner.isLoading.subscribe(
      (isLoading) => (this.spinnerLoading = isLoading)
    );
  }

  ngOnInit() {
    this.spinner.isLoading.next(true);
    setTimeout(() => {
      this.spinner.isLoading.next(false);
    }, 2000);
  }
}
