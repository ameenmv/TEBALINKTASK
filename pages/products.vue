<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>#</th>
          <th>Product</th>
          <th>Barcode</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Views</th>
          <th>Status</th>
          <th>Online Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <!-- # -->
          <th>{{ index + 1 }}</th>
          <!-- product -->
          <td>
            <div class="flex items-center gap-10">
              <div class="avatar">
                <img
                  class="!h-[80px] !w-[80px]"
                  :src="product.img"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
              <div>
                <div class="font-bold">{{ product.name }}</div>
                <div class="text-sm opacity-50">{{ product.description }}</div>
              </div>
            </div>
          </td>
          <!-- Barcode -->
          <td>{{ product.barcode }}</td>
          <!-- Category -->
          <td>{{ product.category }}</td>
          <!-- Brand -->
          <th>{{ product.brand }}</th>
          <!-- views -->
          <th>{{ product.views }}</th>
          <!-- status -->
          <th>
            <button class="btn-active">{{ product.status }}</button>
          </th>
          <!-- online status -->
          <th>
            <button class="btn-active">{{ product.onlineStatus }}</button>
          </th>
          <!-- Actions -->
          <th>
            <div class="flex items-center gap-4">
              <!-- edit -->
              <nuxt-link to="/edit">
                <div class="iconbg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L368 46.1 465.9 144 490.3 119.6c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L432 177.9 334.1 80 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"
                    />
                  </svg>
                </div>
              </nuxt-link>
              <!-- delete -->
              <div onclick="delete_modal.showModal()" class="iconbg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"
                  />
                </svg>
              </div>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
    <!-- popup -->
    <dialog id="delete_modal" class="modal" ref="deleteModal">
      <div class="modal-box text-center">
        <h3 class="font-bold text-lg mb-2">هل أنت متأكد؟</h3>
        <p>سيتم حذف المنتج نهائيًا!</p>
        <div class="modal-action flex justify-center gap-4 mt-4">
          <button class="btn btn-error" @click="confirmDelete">
            نعم، احذف
          </button>
          <form method="dialog">
            <button class="btn">إلغاء</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
        {
          img: "/images/horse.jpg",
          name: "iphone",
          description: "iphone 11 pro max",
          barcode: "42342342",
          category: "tv",
          brand: "samsung",
          views: "56477",
          status: "active",
          onlineStatus: "active",
        },
      ],
    };
  },
  methods: {},
};
</script>
