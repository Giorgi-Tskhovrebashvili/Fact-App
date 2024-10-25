"use client";
import { useEffect, useState } from "react";
import {
  Category,
  FactList,
  Header,
  Loader,
  MainLayout,
  NewFactForm,
} from "./common/components";
import { FactsType } from "./common/types";
import supabase from "./common/config/supabase";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState<FactsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   let isMounted = true;

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/data.json");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const jsonData = await response.json();

  //       if (isMounted) {
  //         setFacts(jsonData);
  //       }
  //     } catch (error) {
  //       if (isMounted) {
  //         if (error instanceof Error) {
  //           setError(error.message);
  //         } else {
  //           setError("An unknown error occurred");
  //         }
  //       }
  //     } finally {
  //       if (isMounted) {
  //         setIsLoading(false);
  //       }
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  useEffect(() => {
    const getFacts = async () => {
      setIsLoading(true);

      const { data: factdata, error: fetchError } = await supabase
        .from("facts")
        .select("*");

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setFacts(factdata as FactsType[]);
      }

      setIsLoading(false);
    };

    getFacts();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <MainLayout>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}
      <div className="grid grid-cols-[250px_1fr] gap-12 h-[calc(100vh_-_48px_-_68px_-_40px)]">
        <Category setCurrentCategory={setCurrentCategory} />

        {isLoading ? (
          <Loader />
        ) : (
          <FactList
            facts={
              currentCategory === "all"
                ? facts
                : facts.filter((fact) => fact.category === currentCategory)
            }
            setFacts={setFacts}
          />
        )}
      </div>
    </MainLayout>
  );
}
