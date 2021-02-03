import { Component, OnInit } from "@angular/core";
import { jsonConfigForm } from "src/jsonConfigForm";
import { JsonConfig } from "./interfaces/json-config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  /**
   * json config object
   */
  public jsonConfig: JsonConfig;
  constructor() {}

  ngOnInit() {
    this.jsonConfig = jsonConfigForm;
  }
}
