import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export function useLoginForm() {
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

  const resetForm = () => {
    form.email = "";
    form.password = "";
    v$.value.$reset();
  };

  return { form, v$, setTouched, resetForm };
}
