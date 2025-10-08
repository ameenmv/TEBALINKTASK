// stores/user.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: null,
    profile: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    setProfile(profile) {
      this.profile = profile;
    },
    logout() {
      this.token = null;
      this.profile = null;
    },
  },
});
