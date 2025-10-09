import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useToast } from "vue-toastification";
import axios from "axios";
import { useUserStore } from "~/stores/user";
import { useRouter } from "vue-router";

export function useLoginForm() {
  // تعريف التوست والراوتر
  const toast = useToast();
  const router = useRouter();

  const form = reactive({
    email: "",
    password: "",
  });

  const rules = {
    form: {
      email: { required },
      password: { required, minLength: minLength(4) },
    },
  };

  const v$ = useVuelidate(rules, { form });

  const setTouched = (field) => {
    if (field === "email" || field === "all") v$.value.form.email.$touch();
    if (field === "password" || field === "all")
      v$.value.form.password.$touch();
  };

  // submit
  const submit = async () => {
    setTouched("all");
    const valid = await v$.value.$validate();

    if (!valid) {
      toast.error("من فضلك املأ البيانات بشكل صحيح");
      return;
    }

    try {
      // form data
      const formData = {
        username: form.email,
        password: form.password,
        provider: "mgr",
      };

      // send to api
      const response = await axios.post(
        "https://freestore.ezeestock.com/api/login",
        formData
      );

      console.log("📥 Response:", response.data);
      if (response.data.status === 200) {
        const userStore = useUserStore();
        userStore.setAuthData(response.data.data);
        toast.success("✅ تسجيل الدخول ناجح");
        setTimeout(() => {
          router.push("/products");
        }, 1000);
      } else {
        toast.error(response.data.message || "بيانات غير صحيحة");
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      // delete this before deadline
      toast.error(
        error.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول"
      );
    }
  };

  return { form, v$, setTouched, submit };
}
