// composables/useLoginForm.js
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useToast } from "vue-toastification";

export function useLoginForm() {
  const toast = useToast();

  const form = reactive({
    email: "",
    password: "",
  });

  const rules = {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  };

  const v$ = useVuelidate(rules, { form });

  const setTouched = (field) => {
    if (field === "email" || field === "all") v$.value.form.email.$touch();
    if (field === "password" || field === "all")
      v$.value.form.password.$touch();
  };

  const submit = async () => {
    setTouched("all");
    const valid = await v$.value.$validate();

    if (valid) {
      toast.success("Form submitted successfully!");
      form.email = "";
      form.password = "";
      v$.value.$reset();
    } else {
    }
  };

  return { form, v$, setTouched, submit };
}
