"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex grow min-h-[56px] items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={25}
          alt="search icon"
          className="cursor-pointer"
        ></Image>
      )}
      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        value=""
        onChange={() => {}}
      />
    </div>
  );
};

export default LocalSearchBar;
