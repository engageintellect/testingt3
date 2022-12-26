import { type PropsWithChildren } from "react";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({
  // title,
  description,
}: PropsWithChildren<HeroProps>) {
  return (
    <div
      className="bg-hero flex h-80 animate-gradient-x items-center justify-center bg-gradient-to-r from-purple-500 
		via-blue-500 
		to-purple-500 
		bg-cover 
		bg-center
		shadow-lg backdrop-blur-3xl md:h-96
		"
    >
      <div className="text-center text-white">
        <div className="py-2 text-5xl font-bold tracking-tighter md:my-5 md:text-7xl">
          {/* {title} */}
          <a href="/">
            Rugged<span className="text-blue-400"></span> Development
          </a>
        </div>
        <div className="text-md mx-auto px-5 tracking-tighter sm:w-2/3 md:text-xl xl:text-2xl">
          {description}
        </div>

        <div className="flex items-center justify-center gap-4">
          <a href="/#learn_more">
            <button className="mt-4 rounded-lg bg-purple-800 p-4 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-purple-700">
              Learn More
            </button>
          </a>

          <a href="/#contribute">
            <button className="mt-4 rounded-lg bg-neutral-900 p-4 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-neutral-800">
              Get a Quote
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
