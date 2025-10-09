<template>
  <div class="p-[50px]">
    <p class="font-bold text-[20px]">Edit Product</p>
    <div class="flex mt-10 gap-6">
      <div class="w-[65%]">
        <div class="flex justify-between items-center">
          <div class="flex gap-2">
            <input type="checkbox" checked="checked" class="toggle" />
            <p>online <span class="text-[red]"> *</span></p>
          </div>
          <div class="flex gap-2">
            <input type="checkbox" checked="checked" class="toggle" />
            <p>Show units <span class="text-[red]"> *</span></p>
          </div>
          <div class="flex gap-2">
            <input type="checkbox" checked="checked" class="toggle" />
            <p>featured <span class="text-[red]"> *</span></p>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-20 mt-5">
          <!-- product Name -->
          <div class="flex flex-col gap-2">
            <label class="mainLabel" for="">
              <p>Product Name <span> *</span></p>
            </label>
            <input type="text" class="mainInput" name="" id="" />
          </div>
          <!-- weight -->
          <div class="flex flex-col gap-2">
            <label class="mainLabel" for="">
              <p>weight (gm) <span> *</span></p>
            </label>
            <input type="text" class="mainInput" name="" id="" />
          </div>
          <!-- sku -->
          <div class="flex flex-col gap-2">
            <label class="mainLabel" for="">
              <p>SKU <span> *</span></p>
            </label>
            <input type="text" class="mainInput" name="" id="" />
          </div>
          <!-- barcode -->
          <div class="flex flex-col gap-2">
            <label class="mainLabel" for="">
              <p>Barcode <span> *</span></p>
            </label>
            <input type="text" class="mainInput" name="" id="" />
          </div>
        </div>
        <div class="mt-6 h-[200px] w-[90%]">
          <QuillEditor v-model:content="content" theme="snow" />
        </div>
        <!-- Buying Price -->
        <div class="flex flex-col gap-2 mt-20">
          <label class="mainLabel" for="">
            <p>Buying Price <span> *</span></p>
          </label>
          <input type="text" class="mainInput w-[fit-content]" name="" id="" />
        </div>
        <div class="flex flex-wrap items-center gap-20 mt-2">
          <!-- Selling Price -->
          <div class="flex flex-col gap-2">
            <label class="mainLabel" for="">
              <p>Selling Price <span> *</span></p>
            </label>
            <input type="text" class="mainInput" name="" id="" />
          </div>
          <!-- TAX % -->
          <div class="flex flex-col gap-2">
            <label class="mainLabel" for="">
              <p>Tax % <span> *</span></p>
            </label>
            <input type="text" class="mainInput" name="" id="" />
          </div>
          <!-- Maximum Order  -->
          <div class="flex flex-col gap-2">
            <label class="mainLabel" for="">
              <p>Maximum Order <span> *</span></p>
            </label>
            <input type="text" class="mainInput" name="" id="" />
          </div>
        </div>
      </div>
      <div class="w-[35%] pl-6 border-l flex flex-col gap-6">
        <!-- category -->
        <div class="flex flex-col gap-2 w-full">
          <label class="mainLabel" for="">
            <p>Category <span> *</span></p>
          </label>
          <select class="select">
            <option disabled selected>Select Category</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <div class="flex flex-col gap-2 w-full">
          <!-- brand -->
          <label class="mainLabel" for="">
            <p>Brand <span> *</span></p>
          </label>
          <select class="select">
            <option disabled selected>Select Category</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        <!-- unit -->
        <div class="flex flex-col gap-2 w-full">
          <label class="mainLabel" for="">
            <p>Unit <span> *</span></p>
          </label>
          <select class="select">
            <option disabled selected>Select Category</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const content = ref("");
</script>

<style lang="scss" scoped></style>
