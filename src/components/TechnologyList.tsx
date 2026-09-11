import '../index.css'
import type { TechnologiesType } from '../types'
import { use } from 'react'
export interface TechnologyListProps {
  technologiesPromise: Promise<TechnologiesType[]>;
}


export default function TechnologyList({ technologiesPromise }: TechnologyListProps) {
  const technologies = use(technologiesPromise);
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
            <div
              key={technology.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >

              {/* Icon + Badge */}
              <div className="mb-5 flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                  />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  {technology.badge}
                </span>

              </div>


              {/* Name */}
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                {technology.name}
              </h2>


              {/* Description */}
              <p className="mb-6 text-sm leading-6 text-gray-500">
                {technology.description}
              </p>


              {/* Category + Difficulty */}
              <div className="mb-5 flex items-center justify-between">

                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                  {technology.category}
                </span>

                <span className="text-xs font-medium text-slate-500">
                  {technology.difficulty}
                </span>

              </div>


              {/* Rating */}
              <div className="mb-5 flex items-center gap-2">
                <span className="text-yellow-400">
                  ★
                </span>

                <span className="text-sm font-semibold text-gray-800">
                  {technology.rating}
                </span>
              </div>


              {/* Button */}
              <button
                type="button"
                className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Add to Stack
              </button>

            </div>
          ))}

        </div>


        {/* RIGHT — Your Stack */}
        <div className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

          <h2 className="text-base font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="mb-4 text-xs text-slate-400">
            2 Technology Selected
          </p>


          {/* Svelte */}
          <div className="mb-2 flex h-12 items-center rounded-lg border border-slate-200 px-2.5">

            <img
              src="https://icon.icepanel.io/Technology/svg/Svelte.svg"
              alt="Svelte"
              className="h-7 w-7 object-contain"
            />

            <div className="ml-2 flex-1">
              <p className="text-xs font-bold text-slate-900">
                Svelte
              </p>

              <p className="text-[9px] text-slate-400">
                Frontend
              </p>
            </div>

            <button className="text-xl text-slate-400">
              ×
            </button>

          </div>


          {/* Redis */}
          <div className="mb-5 flex h-12 items-center rounded-lg border border-slate-200 px-2.5">

            <img
              src="https://icon.icepanel.io/Technology/svg/Redis.svg"
              alt="Redis"
              className="h-7 w-7 object-contain"
            />

            <div className="ml-2 flex-1">
              <p className="text-xs font-bold text-slate-900">
                Redis
              </p>

              <p className="text-[9px] text-slate-400">
                Database
              </p>
            </div>

            <button className="text-xl text-slate-400">
              ×
            </button>

          </div>


          {/* Remove All */}
          <button
            type="button"
            className="w-full rounded-lg border border-rose-400 py-1.5 text-sm font-semibold text-red-600"
          >
            Remove All
          </button>

        </div>

      </div>

    </div>
  );
}
