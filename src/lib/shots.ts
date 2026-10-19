import algorithms from "@/assets/01_algorithms.webp.asset.json";
import editor from "@/assets/02_code_editor.webp.asset.json";
import mentor from "@/assets/03_ai_mentor.webp.asset.json";
import history from "@/assets/04_history.webp.asset.json";
import banner from "@/assets/banner.webp.asset.json";
import logo from "@/assets/logo.webp.asset.json";
import mark from "@/assets/mark.webp.asset.json";
import webOnboarding from "@/assets/web_onboarding.webp.asset.json";
import webLogin from "@/assets/web_login.webp.asset.json";
import webHome from "@/assets/web_home.webp.asset.json";
import webAlgorithms from "@/assets/web_algorithms.webp.asset.json";
import webAppearance from "@/assets/web_appearance.webp.asset.json";

export type ShotKey = "editor" | "mentor" | "algorithms" | "history";
export type WebShotKey = "onboarding" | "login" | "home" | "algorithms" | "appearance";

export const shots: Record<ShotKey, string> = {
  editor: editor.url,
  mentor: mentor.url,
  algorithms: algorithms.url,
  history: history.url,
};

export const webShots: Record<WebShotKey, string> = {
  onboarding: webOnboarding.url,
  login: webLogin.url,
  home: webHome.url,
  algorithms: webAlgorithms.url,
  appearance: webAppearance.url,
};

export const bannerUrl = banner.url;
export const logoUrl = logo.url;
export const markUrl = mark.url;
