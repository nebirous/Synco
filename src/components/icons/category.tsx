import clsx from "clsx";
import React from "react";

type Props = { selected: boolean };

function Category({ selected }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          "fill-[#C0BFC4] transition-all group-hover:fill-[#a94040] dark:fill-[#463333] dark:group-hover:fill-[#ffc7c7]",
          { "!fill-[#a94040] dark:!fill-[#ffc7c7] ": selected },
        )}
      />
      <rect
        x="3"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          "fill-[#C0BFC4] transition-all group-hover:fill-[#a94040] dark:fill-[#463333] dark:group-hover:fill-[#ffc7c7]",
          { "!fill-[#a94040] dark:!fill-[#ffc7c7] ": selected },
        )}
      />
      <rect
        x="13"
        y="3"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          "fill-[#C0BFC4] transition-all group-hover:fill-[#a94040] dark:fill-[#463333] dark:group-hover:fill-[#ffc7c7]",
          { "!fill-[#a94040] dark:!fill-[#ffc7c7] ": selected },
        )}
      />
      <rect
        x="13"
        y="13"
        width="8"
        height="8"
        rx="3"
        className={clsx(
          "fill-[#665959] transition-all group-hover:fill-[#ff8a8a] dark:fill-[#c4bfbf] dark:group-hover:fill-[#ff5454] ",
          { "fill-[#ff8a8a] dark:!fill-[#a94040] ": selected },
        )}
      />
    </svg>
  );
}

export default Category;
