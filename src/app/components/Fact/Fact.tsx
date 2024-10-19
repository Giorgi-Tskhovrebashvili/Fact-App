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
    <div>
      <p className="font-sono">
        {isDisputed ? <span className="disputed">[⛔️ DISPUTED]</span> : null}
        {fact.text}
        <a href={fact.source} target="_blank" rel="noreferrer">
          (Source)
        </a>
      </p>
      <span
        className=""
        style={{
          backgroundColor: categoryData ? categoryData.color : "gray",
        }}
      >
        {fact.category}
      </span>
      <div className="font-sono">
        <Button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
          className={""}
        >
          👍 {fact.votesInteresting}
        </Button>
        <Button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
          className={""}
        >
          🤯 {fact.votesMindblowing}
        </Button>
        <Button
          onClick={() => handleVote("votesFalse")}
          disabled={isUpdating}
          className={""}
        >
          ⛔️ {fact.votesFalse}
        </Button>
      </div>
    </div>
  );
};

export default Fact;
