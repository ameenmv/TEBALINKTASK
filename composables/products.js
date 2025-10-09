// import axios from "axios";

// export function products() {
//   // Get Products
//   const getProducts = async () => {
//     try {
//       // send to api
//       const response = await axios.post(
//         "https://freestore.ezeestock.com/api/login",
//         formData
//       );

//       console.log("📥 Response:", response.data);
//       if (response.data.status === 200) {
//         const userStore = useUserStore();
//         userStore.setAuthData(response.data.data);
//         toast.success("✅ تسجيل الدخول ناجح");
//         router.push("/products");
//       } else {
//         toast.error(response.data.message || "بيانات غير صحيحة");
//       }
//     } catch (error) {
//       console.error("❌ Error:", error.response?.data || error.message);
//       // delete this before deadline
//       toast.error(
//         error.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول"
//       );
//     }
//   };

//   return { submit };
// }
