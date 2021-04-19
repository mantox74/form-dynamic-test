import { ValidatorFn } from "@angular/forms";

export interface JsonConfig {
  title?: string;
  fields?: Array<FieldConfig>;
  className?: string;
}

export interface FieldConfig {
  name: string;
  type: string;
  options?: Array<OptionsConfig>;
  validators?: Array<string>;
  customValidator?: Array<string>;
  className?: string;
  value?: any;
}

interface OptionsConfig {
  label: string;
  value: any;
}
