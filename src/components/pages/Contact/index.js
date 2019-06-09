import Contact from "./Contact";
import i18n from "@/components/decorators/i18n";

const i18nMap = {
  title: ["message.title"],
  apple: ["message.apple", 10],
  description: ["message.description"],
  listItem: ["message.listItem[2]"]
};

export default i18n(i18nMap)(Contact);
