import { CSSProperties, Dispatch, SetStateAction } from "react";

export interface ButtonType {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties | undefined;
}

export interface InputType {
  type: "text";
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  className: string;
}

export interface MaynlayoutType {
  children: React.ReactNode;
}

export interface HeaderType {
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

export interface NewFactFormType {
  setFacts: React.Dispatch<React.SetStateAction<FactsType[]>>;
  setShowForm: (event: boolean) => void;
}

export interface CategoryType {
  setCurrentCategory: (value: string) => void;
}

export interface FactsType {
  id: number;
  text: string;
  source: string;
  category: string;
  votesInteresting: number;
  votesMindblowing: number;
  votesFalse: number;
}

export interface CategoriesType {
  name: string;
  color: string;
}

export interface FactType {
  fact: FactsType;
  setFacts: React.Dispatch<React.SetStateAction<FactsType[]>>;
}

export interface FactListType {
  facts: FactsType[]; // Ensure the types are the same
  setFacts: React.Dispatch<React.SetStateAction<FactsType[]>>;
}
