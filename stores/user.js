import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: null,
    refreshToken: null,
    profile: null,
  }),

  actions: {
    setAuthData(data) {
      this.token = data.access_token;
      this.refreshToken = data.refresh_token;

      localStorage.setItem("token", this.token);
      localStorage.setItem("refresh_token", this.refreshToken);
    },

    loadAuthData() {
      const savedToken = localStorage.getItem("token");
      const savedRefresh = localStorage.getItem("refresh_token");
      const savedProfile = localStorage.getItem("profile");

      if (savedToken) this.token = savedToken;
      if (savedRefresh) this.refreshToken = savedRefresh;
      if (savedProfile) this.profile = JSON.parse(savedProfile);
    },

    logout() {
      this.token = null;
      this.refreshToken = null;
      this.profile = null;

      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("profile");
    },
  },
});
