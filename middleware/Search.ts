export default defineNuxtRouteMiddleware((to) => {
  if (!to.query.q) {
    return navigateTo("/");
  }
});
