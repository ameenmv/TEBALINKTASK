<template>
  <div
    class="w-screen h-screen flex justify-center items-center bg-[var(--bg)]"
  >
    <div
      class="p-10 bg-white flex flex-col gap-6 justify-center items-center rounded-[4px]"
    >
      <!-- Email Field -->
      <div>
        <label class="input validator w-[400px]">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            v-model="form.email"
            @input="setTouched('email')"
            type="email"
            placeholder="Your Email"
            :class="v$.form.email.$error ? 'is-invalid' : ''"
            required
          />
        </label>
        <div v-if="v$.form.email.$errors.length">
          <div
            v-for="error in v$.form.email.$errors"
            :key="error.$uid"
            class="text-red-500 mt-1 font-medium"
          >
            {{ error.$message }}
          </div>
        </div>
      </div>

      <!-- Password Field -->
      <div>
        <label class="input validator w-[400px]">
          <svg
            class="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
              ></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            v-model="form.password"
            @input="setTouched('password')"
            type="password"
            placeholder="Password"
            :class="v$.form.password.$error ? 'is-invalid' : ''"
            required
          />
        </label>
        <div v-if="v$.form.password.$errors.length">
          <div
            v-for="error in v$.form.password.$errors"
            :key="error.$uid"
            class="text-red-500 mt-1 font-medium"
          >
            {{ error.$message }}
          </div>
        </div>
      </div>

      <!-- Submit Button -->
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
import { useLoginForm } from "~/composables/useLoginForm";
const { form, v$, setTouched, submit } = useLoginForm();
</script>
