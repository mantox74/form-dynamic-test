import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
  @ViewChild("autocomplete", { static: true }) autocomplete: HTMLSelectElement;

  options: string[] = ["Uno", "Due", "Tre"];
  filteredOptions: Observable<string[]>;
  constructor() {}

  ngOnInit() {
    //this.filteredOptions = this.autocomplete.
    // .pipe(
    //   startWith(""),
    //   map((value) => this._filter(value))
    // );
  }

  filters(event) {
    console.log(event);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  /**
   * submit form
   * @param form : form submitted
   */
  onSubmit(form) {
    console.log(form);
    console.log(this.autocomplete);
  }
}
