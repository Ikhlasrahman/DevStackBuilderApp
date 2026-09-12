import type { TechnologiesType } from "../types";
import { X } from 'lucide-react';


interface YourStackProps {
    stack: TechnologiesType[];
}
function YourStack({ stack }: YourStackProps) {
    return (
        <div className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">

            <h2 className="text-base font-bold text-slate-900">
                Your Stack
            </h2>

            <p className="mb-4 text-xs text-slate-400">
                {stack.length} Technology Selected
            </p>

            {stack.map((technology) => (
                <div
                    key={technology.id}
                    className="mb-2 flex h-12 items-center rounded-lg border border-slate-200 px-2.5"
                >
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-7 w-7 object-contain"
                    />

                    <div className="ml-2 flex-1">
                        <p className="text-xs font-bold text-slate-900">
                            {technology.name}
                        </p>

                        <p className="text-[9px] text-slate-400">
                            {technology.category}
                        </p>
                    </div>

                    <button className="text-xl text-slate-400">
                        <X />
                    </button>
                </div>
            ))}

            <button
                type="button"
                className="w-full rounded-lg border border-rose-400 py-1.5 text-sm font-semibold text-red-600"
            >
                Remove All
            </button>

        </div>
    );
}

export default YourStack;