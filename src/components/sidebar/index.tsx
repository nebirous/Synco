"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { menuOptions } from "@/lib/constants";
import clsx from "clsx";

type Props = {};

const MenuOptions = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className="flex h-screen flex-col items-center justify-between gap-10 overflow-scroll px-2 py-6 dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-8">
        <Link className="flex flex-row font-bold" href="/">
          <Image
            src="/Synco-logo.png"
            width={50}
            height={50}
            alt="Synco logo"
            className="shadow-sm"
          />
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        "scale[1.5] group flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg p-[3px]",
                        {
                          "bg-[#EEE0FF] dark:bg-[#2F006B]":
                            pathName === menuItem.href,
                        },
                      )}
                    >
                      <menuItem.Component
                        selected={pathName === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>
      </div>
    </nav>
  );
};

export default MenuOptions;
