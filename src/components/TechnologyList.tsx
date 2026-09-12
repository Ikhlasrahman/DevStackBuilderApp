import "../index.css";
import type { TechnologiesType } from "../types";
import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
export interface TechnologyListProps {
  technologiesPromise: Promise<TechnologiesType[]>;
}

export default function TechnologyList({ technologiesPromise, }: TechnologyListProps) {

  const technologies = use(technologiesPromise);

  const [stack, setStack] = useState<TechnologiesType[]>([]);

  function handleAddToStack(technology: TechnologiesType) {
    setStack((previousStack: TechnologiesType[]) => [...previousStack, technology]);
  }

  function handleRemoveStack(id:string){
    const remove = stack.filter((c)=>c.id !== id);
    setStack(remove)
  }

  function handleRemoveAllStack(){
    setStack([]);
  }

  return (
    <div className="container mx-auto p-8">
      {/* Heading */}
      <h2 className="display-font explore-tech">
        Explore the <span className="word-linear">Technologies</span>
      </h2>

      <div className="mb-10">
        <p className="paragraph-font">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {/* LEFT — Technology Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard 
            key={technology.id} 
              technology={technology} 
              onAddToStack={handleAddToStack} 
              isAdded={stack.some((item)=>item.id===technology.id)}
              />
          ))}
        </div>

        <YourStack stack={stack} onRemove={handleRemoveStack} onRemoveAll={handleRemoveAllStack}/>
      </div>
    </div>
  );
}
