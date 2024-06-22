"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function HeroParagraph({ words }: { words: string }) {
  return <TextGenerateEffect words={words} />;
}
