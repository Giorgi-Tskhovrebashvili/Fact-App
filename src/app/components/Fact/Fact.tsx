import { CATEGORIES } from "@/app/utils/category";
import React, { useState } from "react";
import { Button } from "..";
import { CategoriesType, FactType, FactsType } from "@/app/types";

const Fact = ({ fact, setFacts }: FactType) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  const categoryData = CATEGORIES.find(
    (cat: CategoriesType) => cat.name === fact.category
  );

  const handleVote = (
    columnName: keyof Pick<
      FactsType,
      "votesInteresting" | "votesMindblowing" | "votesFalse"
    >
  ) => {
    setIsUpdating(true);

    setFacts((prevFacts) =>
      prevFacts.map((prevFact) =>
        prevFact.id === fact.id
          ? { ...prevFact, [columnName]: prevFact[columnName] + 1 }
          : prevFact
      )
    );

    setIsUpdating(false);
  };

  return (
    <div className="flex items-center justify-between gap-[24px] px-[24px] py-[16px] bg-[#44403c] text-[20px] rounded-[16px]">
      <p className="font-sono">
        {isDisputed ? <span className="disputed">[⛔️ DISPUTED]</span> : null}
        {fact.text}
        <a
          href={fact.source}
          target="_blank"
          rel="noreferrer"
          className="text-[#a8a29e] no-underline ml-[12px] transition-transform duration-300 transform hover:text-[#3b82f6]"
        >
          (Source)
        </a>
      </p>
      <span
        className="uppercase text-[14px] rounded-[100px] px-[10px] py-[3px]"
        style={{
          backgroundColor: categoryData ? categoryData.color : "gray",
        }}
      >
        {fact.category}
      </span>
      <div className="font-sono flex gap-[8px] ml-auto shrink-0">
        <Button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
          className={
            "bg-[#78716c] px-[12px] py-[6px] rounded-[100px] text-[18px] font-semibold transition-transform duration-300 transform cursor-pointer hover:bg-[#292524]"
          }
        >
          👍 {fact.votesInteresting}
        </Button>
        <Button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
          className={
            "bg-[#78716c] px-[12px] py-[6px] rounded-[100px] text-[18px] font-semibold transition-transform duration-300 transform cursor-pointer hover:bg-[#292524]"
          }
        >
          🤯 {fact.votesMindblowing}
        </Button>
        <Button
          onClick={() => handleVote("votesFalse")}
          disabled={isUpdating}
          className={
            "bg-[#78716c] px-[12px] py-[6px] rounded-[100px] text-[18px] font-semibold transition-transform duration-300 transform cursor-pointer hover:bg-[#292524]"
          }
        >
          ⛔️ {fact.votesFalse}
        </Button>
      </div>
    </div>
  );
};

export default Fact;
