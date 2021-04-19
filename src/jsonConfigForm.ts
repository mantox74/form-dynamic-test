export const jsonConfigForm = {
  title: "Dynamic form test",
  className: "d-form",
  fields: [
    {
      name: "Email",
      type: "email",
      validators: ["Validator.required", "Validator.minLength(5)"],
      customValidator: [],
      className: "d-form__email",
      value: "info@prova.it",
    },
    {
      name: "Autocomplete",
      type: "autocomplete",
      options: [
        { label: "Select one", value: "" },
        { label: "Uno", value: "uno" },
        { label: "Due", value: "due" },
        { label: "Tre", value: "tre" },
      ],
      validators: ["required"],
      customValidator: [],
      className: "d-form__email",
      value: "uno",
    },
  ],
};
