import React from "react";
import { Button } from "../..";
import { CATEGORIES } from "@/app/common/utils/category";
import { CategoryType } from "@/app/common/types";

const Category = ({ setCurrentCategory }: CategoryType) => {
  return (
    <div className="">
      <Button
        className={
          "bg-custom-gradient uppercase text-[17px] rounded-[100px] cursor-pointer w-[100%] mb-[32px] px-[20px] py-[10px] leading-none transition-transform duration-300 transform hover:scale-110 hover:-rotate-2"
        }
        onClick={() => setCurrentCategory("all")}
      >
        All
      </Button>
      <ul className="flex flex-col gap-[16px]">
        {CATEGORIES.map((category) => (
          <li key={category.name}>
            <Button
              className="uppercase text-[17px] rounded-[100px] cursor-pointer w-[100%] px-[20px] py-[10px] leading-none transition-transform duration-300 transform hover:scale-110 hover:-rotate-2"
              style={{ backgroundColor: category.color }}
              onClick={() => setCurrentCategory(category.name)}
            >
              {category.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
