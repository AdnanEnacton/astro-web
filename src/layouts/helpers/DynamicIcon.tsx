import React, { type FC } from "react";
import type { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa6";
import * as CiIcons from "react-icons/ci";

type IconMap = Record<string, IconType>;

interface IDynamicIcon extends React.SVGProps<SVGSVGElement> {
  icon: string;
  className?: string;
}

const iconLibraries: { [key: string]: IconMap } = {
  fa: FaIcons,
  ci: CiIcons,
};

const DynamicIcon: FC<IDynamicIcon> = ({ icon, ...props }) => {
  const cleanIconName = icon.includes(":") ? icon.split(":")[1] : icon;
  const libraryKey = icon.includes(":") ? icon.split(":")[0].toLowerCase() : icon.substring(0, 2).toLowerCase();

  const IconLibrary = iconLibraries[libraryKey];
  const Icon = IconLibrary ? IconLibrary[cleanIconName] : undefined;

  if (!Icon) {
    return <span className="text-sm">Icon not found</span>;
  }

  return <Icon {...props} />;
};

export default DynamicIcon;
