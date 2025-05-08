import { getSettings } from "@/data/get-settings";
import { Nav } from "./nav";

export const Header = async (locale: any) => {
  const settings = await getSettings();
  return <Nav settings={settings.data.data.story.content} locale={locale} />;
};
