const theme = ref<string>("light");

function setTheme(newTheme: string): void {
  theme.value = newTheme;
  localStorage.setItem("theme", newTheme);

  if (newTheme === "light") {
    document.querySelector("html")?.classList.remove("dark");
  } else {
    document.querySelector("html")?.classList.add("dark");
  }
}

export function initTheme(): void {
  const cachedTheme: string = localStorage.getItem("theme") || "light";

  const userPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (cachedTheme) {
    setTheme(cachedTheme);
  } else if (userPrefersDark) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

export function toggleTheme(): void {
  switch (localStorage.getItem("theme")) {
    case "light":
      setTheme("dark");
      break;

    default:
      setTheme("light");
      break;
  }
}

export function getTheme(): string {
  return theme.value;
}
