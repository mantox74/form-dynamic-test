import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { JsonConfig, FieldConfig } from "src/app/interfaces/json-config";

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

  /** check if json config form exist */
  get jsonExist(): boolean {
    return !!this.jsonConfig;
  }

  /**
   * check if title exist and then if show it in html
   */
  get showTitle(): boolean {
    return this.jsonExist && !!this.jsonConfig.title?.length;
  }

  /**
   * get title
   */
  get title(): string {
    return this.jsonExist && !!this.jsonConfig.title && this.jsonConfig.title;
  }

  /**
   * get class form cointainer
   */
  get formClass(): string {
    return (
      this.jsonExist && !!this.jsonConfig.className && this.jsonConfig.className
    );
  }

  /** return Array fields configuration */
  get formFields(): Array<FieldConfig> {
    return this.jsonExist && this.jsonConfig.fields;
  }

  options: string[] = ["Uno", "Due", "Tre"];
  filteredOptions: Observable<string[]>;

  formGroupContainer: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formFields?.forEach((field: FieldConfig) => {
      this.formGroupContainer.addControl(
        field.name,
        new FormControl(field.value)
      );
      //this.fb.control(field.value, field.validators)
    });
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
