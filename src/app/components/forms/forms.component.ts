import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { JsonConfig } from "src/app/interfaces/json-config";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
  @ViewChild("autocomplete", { static: true }) autocomplete: HTMLSelectElement;
  /**
   * file json for configure the form
   */
  @Input() jsonConfig: JsonConfig;
  /**
   * check if title exist and then if show it in html
   */
  get showTitle(): boolean {
    return !!this.jsonConfig && !!this.jsonConfig.title?.length;
  }

  /**
   * get title
   */
  get title(): string {
    return !!this.jsonConfig && this.jsonConfig.title;
  }

  options: string[] = ["Uno", "Due", "Tre"];
  filteredOptions: Observable<string[]>;
  constructor() {}

  ngOnInit() {}

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
