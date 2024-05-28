"use client";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import React from "react";

const placeholders = [
  "What is Newton's First Law of Motion?",
  "What is the Law of Conservation of Energy?",
  "What is the Doppler Effect?",
  "What is the Theory of General Relativity?",
  "What is Quantum Mechanics?",
];

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted");
};

const SearchBar = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-center">
          Ask a question
        </h1>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default SearchBar;
