import { FactListType, FactsType } from "@/app/types";
import { Fact } from "..";

const FactList = ({ facts, setFacts }: FactListType) => {
  return (
    <div className="overflow-y-auto flex flex-col gap-[16px]">
      {Array.isArray(facts) && facts.length > 0 ? (
        facts.map((fact: FactsType) => (
          <Fact key={fact.id} fact={fact} setFacts={setFacts} />
        ))
      ) : (
        <p>No facts available</p>
      )}
    </div>
  );
};

export default FactList;
