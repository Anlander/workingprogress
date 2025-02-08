import { getSettings } from "@/data/get-settings";
import { Nav } from "./nav";

export const Header = async () => {
  const settings = await getSettings();
  return <Nav settings={settings.data.data.story.content} />;
};
