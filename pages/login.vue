<template>
  <div
    class="w-screen h-screen flex justify-center items-center bg-[var(--bg)]"
  >
    <div
      class="p-10 bg-white flex flex-col gap-6 justify-center items-center rounded-[4px]"
    >
      <FormField
        v-model="form.email"
        :validator="v$.form.email"
        placeholder="Your Email"
        type="email"
        @input="setTouched('email')"
      />

      <FormField
        v-model="form.password"
        :validator="v$.form.password"
        placeholder="Password"
        type="password"
        @input="setTouched('password')"
      />

      <input
        @click="submit"
        type="submit"
        value="Submit"
        class="btn w-[400px]"
      />
    </div>
  </div>
</template>

<script setup>
import { useLoginForm } from "@/composables/useLoginForm";
import { useToast } from "vue-toastification";
import FormField from "@/components/FormField.vue";

const toast = useToast();
const { form, v$, setTouched, resetForm } = useLoginForm();

const submit = async (event) => {
  event.preventDefault();
  setTouched("all");

  const valid = await v$.value.$validate();
  if (valid) {
    toast.success("Form submitted successfully!");
    resetForm();
  } else {
    toast.error("Please fix the errors before submitting.");
  }
};
</script>
