<template>
  <div class="p-[50px]">
    <p class="font-bold text-[20px]">Edit Product</p>

    <div class="flex mt-10 gap-6">
      <!-- Left side -->
      <div class="w-[65%]">
        <div class="flex justify-between items-center">
          <div class="flex gap-2">
            <input
              type="checkbox"
              v-model="productData.online"
              class="toggle"
            />
            <p>Online <span class="text-[red]">*</span></p>
          </div>
          <div class="flex gap-2">
            <input
              type="checkbox"
              v-model="productData.showUnits"
              class="toggle"
            />
            <p>Show units <span class="text-[red]">*</span></p>
          </div>
          <div class="flex gap-2">
            <input
              type="checkbox"
              v-model="productData.featured"
              class="toggle"
            />
            <p>Featured <span class="text-[red]">*</span></p>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-20 mt-5">
          <!-- Product Name -->
          <div class="flex flex-col gap-2 w-[40%]">
            <label class="mainLabel"
              ><p>Product Name <span>*</span></p></label
            >
            <input v-model="productData.name" type="text" class="mainInput" />
            <p v-if="v$.name.$error" class="text-red-500 text-sm">
              Product name is required
            </p>
          </div>

          <!-- Weight -->
          <div class="flex flex-col gap-2 w-[40%]">
            <label class="mainLabel"
              ><p>Weight (gm) <span>*</span></p></label
            >
            <input v-model="productData.weight" type="text" class="mainInput" />
            <p v-if="v$.weight.$error" class="text-red-500 text-sm">
              Weight is required
            </p>
          </div>

          <!-- SKU -->
          <div class="flex flex-col gap-2 w-[40%]">
            <label class="mainLabel"
              ><p>SKU <span>*</span></p></label
            >
            <input v-model="productData.sku" type="text" class="mainInput" />
            <p v-if="v$.sku.$error" class="text-red-500 text-sm">
              SKU is required
            </p>
          </div>

          <!-- Barcode -->
          <div class="flex flex-col gap-2 w-[40%]">
            <label class="mainLabel"
              ><p>Barcode <span>*</span></p></label
            >
            <input
              v-model="productData.barcode"
              type="text"
              class="mainInput"
            />
            <p v-if="v$.barcode.$error" class="text-red-500 text-sm">
              Barcode is required
            </p>
          </div>
        </div>

        <!-- Description -->
        <div class="flex flex-col gap-2 mt-6">
          <label class="mainLabel"
            ><p>Product Description <span>*</span></p></label
          >
          <div class="h-[200px] w-[90%]">
            <QuillEditor
              v-model:content="productData.description"
              theme="snow"
            />
          </div>
          <p v-if="v$.description.$error" class="text-red-500 text-sm">
            Description is required
          </p>
        </div>

        <!-- Buying Price -->
        <div class="flex flex-col gap-2 mt-20 w-[40%]">
          <label class="mainLabel"
            ><p>Buying Price <span>*</span></p></label
          >
          <input
            v-model="productData.buyingPrice"
            type="text"
            class="mainInput"
          />
          <p v-if="v$.buyingPrice.$error" class="text-red-500 text-sm">
            Buying price must be numeric
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-20 mt-2">
          <!-- Selling Price -->
          <div class="flex flex-col gap-2 w-[40%]">
            <label class="mainLabel"
              ><p>Selling Price <span>*</span></p></label
            >
            <input
              v-model="productData.sellingPrice"
              type="text"
              class="mainInput"
            />
            <p v-if="v$.sellingPrice.$error" class="text-red-500 text-sm">
              Selling price must be numeric
            </p>
          </div>

          <!-- TAX % -->
          <div class="flex flex-col gap-2 w-[40%]">
            <label class="mainLabel"
              ><p>Tax % <span>*</span></p></label
            >
            <input v-model="productData.tax" type="text" class="mainInput" />
            <p v-if="v$.tax.$error" class="text-red-500 text-sm">
              Tax must be numeric
            </p>
          </div>

          <!-- Maximum Order -->
          <div class="flex flex-col gap-2 w-[40%]">
            <label class="mainLabel"
              ><p>Maximum Order <span>*</span></p></label
            >
            <input
              v-model="productData.maxOrder"
              type="text"
              class="mainInput"
            />
            <p v-if="v$.maxOrder.$error" class="text-red-500 text-sm">
              Max order must be numeric
            </p>
          </div>
        </div>

        <!-- Submit button -->
        <button
          @click="submitForm"
          class="btn mt-10 bg-blue-600 text-white px-5 py-2 rounded"
        >
          Update
        </button>
      </div>

      <!-- Right side -->
      <div class="w-[35%] pl-6 border-l flex flex-col gap-6">
        <!-- Category -->
        <div class="flex flex-col gap-2 w-full">
          <label class="mainLabel"
            ><p>Category <span>*</span></p></label
          >
          <select v-model="productData.category" class="select">
            <option disabled selected value="">Select Category</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
          <p v-if="v$.category.$error" class="text-red-500 text-sm">
            Category is required
          </p>
        </div>

        <!-- Brand -->
        <div class="flex flex-col gap-2 w-full">
          <label class="mainLabel"
            ><p>Brand <span>*</span></p></label
          >
          <select v-model="productData.brand" class="select">
            <option disabled selected value="">Select Brand</option>
            <option>Nike</option>
            <option>Adidas</option>
            <option>Puma</option>
          </select>
          <p v-if="v$.brand.$error" class="text-red-500 text-sm">
            Brand is required
          </p>
        </div>

        <!-- Unit -->
        <div class="flex flex-col gap-2 w-full">
          <label class="mainLabel"
            ><p>Unit <span>*</span></p></label
          >
          <select v-model="productData.unit" class="select">
            <option disabled selected value="">Select Unit</option>
            <option>Piece</option>
            <option>Box</option>
            <option>Kg</option>
          </select>
          <p v-if="v$.unit.$error" class="text-red-500 text-sm">
            Unit is required
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";

const productData = ref({
  online: true,
  showUnits: true,
  featured: false,
  name: "",
  weight: "",
  sku: "",
  barcode: "",
  description: "",
  buyingPrice: "",
  sellingPrice: "",
  tax: "",
  maxOrder: "",
  category: "",
  brand: "",
  unit: "",
});

const rules = {
  name: { required },
  weight: { required },
  sku: { required },
  barcode: { required },
  description: { required },
  buyingPrice: { required, numeric },
  sellingPrice: { required, numeric },
  tax: { required, numeric },
  maxOrder: { required, numeric },
  category: { required },
  brand: { required },
  unit: { required },
};

const v$ = useVuelidate(rules, productData);

const submitForm = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) {
    console.warn("❌ Validation failed");
    return;
  }
  console.log("✅ Product Data:", productData.value);
};
</script>
