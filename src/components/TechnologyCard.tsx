

import type { TechnologiesType } from '../types'
import { ToastContainer, toast } from 'react-toastify';

type TechnologyCardProps = {
    technology: TechnologiesType;
    onAddToStack: (technology: TechnologiesType) => void;
    isAdded: boolean
};

function TechnologyCard({ technology, onAddToStack, isAdded }: TechnologyCardProps) {


    const notify = () => toast(" Added to stack!");
    return (
        <div>
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
                    <span className="text-yellow-400">★</span>

                    <span className="text-sm font-semibold text-gray-800">
                        {technology.rating}
                    </span>
                </div>

                {/* Button */}
                <button
                    disabled={isAdded}
                    type="button"
                    className={`w-full rounded-xl px-4 py-3 text-sm font-medium text-white transition 
                        ${isAdded?"btn-disabled":"btn btn-neutral"} hover:bg-gray-800"`}
                    onClick={() => {
                        console.log("isAdded:", isAdded);
                        onAddToStack(technology);
                        notify();
                    }}
                >
                    {isAdded ? 'Added' : 'Add to Stack'}

                </button>
                <ToastContainer />
            </div>
        </div>
    );
}

export default TechnologyCard;