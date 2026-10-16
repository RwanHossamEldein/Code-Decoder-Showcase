import algorithms from "@/assets/01_algorithms.webp.asset.json";
import editor from "@/assets/02_code_editor.webp.asset.json";
import mentor from "@/assets/03_ai_mentor.webp.asset.json";
import history from "@/assets/04_history.webp.asset.json";
import banner from "@/assets/banner.webp.asset.json";
import logo from "@/assets/logo.webp.asset.json";

export type ShotKey = "editor" | "mentor" | "algorithms" | "history";

export const shots: Record<ShotKey, string> = {
  editor: editor.url,
  mentor: mentor.url,
  algorithms: algorithms.url,
  history: history.url,
};

export const bannerUrl = banner.url;
export const logoUrl = logo.url;
