import { fetchSettings } from "@/app/data/fetch-settings";
import { Nav } from "./nav";

export const Header = async () => {
  const settings = await fetchSettings();
  return <Nav settings={settings.data.data.story.content} />;
};
