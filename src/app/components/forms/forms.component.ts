import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  /**
   * submit form
   * @param form : form submitted
   */
  onSubmit(form) {
    console.log(form);
  }
}
