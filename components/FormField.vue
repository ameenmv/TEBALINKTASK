<template>
  <div>
    <label class="input validator w-[400px]">
      <slot name="icon" />
      <input
        :value="modelValue"
        @input="
          $emit('update:modelValue', $event.target.value);
          $emit('input');
        "
        :type="type"
        :placeholder="placeholder"
        :class="validator.$error ? 'is-invalid' : ''"
        required
      />
    </label>

    <div v-if="validator.$errors.length">
      <div
        v-for="error in validator.$errors"
        :key="error.$uid"
        class="text-[red] mt-1 font-medium"
      >
        {{ error.$message }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  validator: Object,
  placeholder: String,
  type: { type: String, default: "text" },
});
defineEmits(["update:modelValue", "input"]);
</script>
