export interface JsonConfig {
  title?: string;
  fields?: Array<FieldConfig>;
}

interface FieldConfig {
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
