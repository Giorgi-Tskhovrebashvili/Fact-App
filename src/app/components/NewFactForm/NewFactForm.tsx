"use client";
import { FormEvent, useState } from "react";
import { Button, Input } from "..";
import { CATEGORIES } from "@/app/utils/category";
import { FactsType, NewFactFormType } from "@/app/types";

const NewFactForm = ({ setFacts, setShowForm }: NewFactFormType) => {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  const isValidHttpUrl = (urlString: string): boolean => {
    try {
      const url = new URL(urlString);
      return ["http:", "https:"].includes(url.protocol);
    } catch {
      return false;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      const newFact: FactsType = {
        id: Date.now(),
        text,
        source,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
      };

      setFacts((prevFacts) => [newFact, ...prevFacts]);

      setText("");
      setSource("");
      setCategory("");

      setShowForm(false);

      setIsUploading(false);
    }
  };

  return (
    <form
      className="bg-[#44403c] mb-[40px] px-[32px] py-[16px] flex items-center gap-[16px] rounded-[16px]"
      onSubmit={handleSubmit}
    >
      <Input
        type={"text"}
        placeholder={"Share a fact with the world..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
        className={
          "w-[250px] bg-[#78716c] rounded-[100px] p-[16px] text-[18px] placeholder-custom-gray"
        }
      />
      <span className="text-[18px] font-semibold">{200 - textLength}</span>
      <Input
        type={"text"}
        placeholder={"Trustworthy source..."}
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
        className={
          "w-[250px] bg-[#78716c] rounded-[100px] p-[16px] text-[18px] placeholder-custom-gray"
        }
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
        className={
          "w-[220px] bg-[#78716c] rounded-[100px] p-[16px] text-[18px] placeholder-custom-gray"
        }
      >
        <option value="">Choose category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <Button
        className={
          "bg-custom-gradient uppercase text-[20px] rounded-[100px] cursor-pointer px-[32px] py-[15px] leading-none transition-transform duration-300 transform hover:scale-110 hover:-rotate-2"
        }
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Post"}
      </Button>
    </form>
  );
};

export default NewFactForm;
