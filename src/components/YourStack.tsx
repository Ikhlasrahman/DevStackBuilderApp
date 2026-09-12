import type { TechnologiesType } from "../types";
import { X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';


interface YourStackProps {
    stack: TechnologiesType[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;


}
function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {

    const notify = () => toast("Stack is removed");
    const notify2 = () => toast("All Stack is removed");


    return (
        <div className="h-fit rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">
                Your Stack
            </h2>

            {stack.length === 0 ? (
                <>
                    <p className="mb-4 text-xs text-slate-400">
                        No technologies selected yet.
                    </p>

                    <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-slate-200">
                        <p className="text-sm text-slate-400">
                            Your stack is empty.
                        </p>
                    </div>
                </>
            ) : (
                <>
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

                            <button
                                type="button"
                                className="text-xl text-slate-400"
                                onClick={() => {
                                    onRemove(technology.id);
                                    notify();
                                }}
                            >
                                <X />
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        className="w-full rounded-lg border border-rose-400 py-1.5 text-sm font-semibold text-red-600"
                        onClick={() => {
                            onRemoveAll();
                            notify2();
                        }}
                    >
                        Remove All
                    </button>
                </>
            )}

            <ToastContainer />
        </div>
    );
}

export default YourStack;