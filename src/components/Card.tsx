import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  description: string;
  url: string;
};

export default function Card({
  title,
  description,
  url,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <a href={url}>
        <div className="h-24 overflow-hidden rounded-lg bg-neutral-700 p-4 text-white transition-colors duration-300 hover:bg-neutral-600 hover:shadow-md lg:h-32 xl:h-24">
          <div className="text-xl font-semibold md:text-2xl">{title}</div>
          <div className="text-neutral-400">{description}</div>
        </div>
      </a>
    </>
  );
}
