import { format } from "date-fns";
import { de, enUS } from "date-fns/locale";

const dateFormat = (
  date: Date | string,
  pattern: string = "dd MMM, yyyy",
  localeCode: string = "de"
): string => {
  const dateObj = new Date(date);
  const locale = localeCode === "en" ? enUS : de;
  const output = format(dateObj, pattern, { locale });
  return output;
};

export default dateFormat;
