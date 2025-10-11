import { ref, computed } from "vue";
import products from "../assets/products.json";

export function pagination() {
  const currentPage = ref(1);
  const perPage = ref(5);

  const totalPages = computed(() => Math.ceil(products.length / perPage.value));

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    return products.slice(start, start + perPage.value);
  });

  const visiblePages = computed(() => {
    const pages = [];
    const start = Math.max(1, currentPage.value - 2);
    const end = Math.min(totalPages.value, currentPage.value + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  });

  function goToPage(n) {
    currentPage.value = n;
  }
  return {
    currentPage,
    perPage,
    totalPages,
    paginatedProducts,
    visiblePages,
    goToPage,
  };
}
