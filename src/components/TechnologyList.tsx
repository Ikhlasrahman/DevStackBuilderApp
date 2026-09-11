import '../index.css'
const TechnologyList = () => {
    return (
        <div className="container mx-auto p-8">
            <div>
                <h2 className="display-font explore-tech">Explore the <span className="word-linear">Technologies</span></h2>
            </div>
            <div className="mb-10">
                <p className="paragraph-font">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

  {/* Icon + Badge */}
  <div className="mb-5 flex items-center justify-between">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
      <img
        src="https://icon.icepanel.io/Technology/svg/React.svg"
        alt="React"
        className="h-8 w-8"
      />
    </div>

    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
      Popular
    </span>
  </div>

  {/* Name */}
  <h2 className="mb-2 text-xl font-semibold text-gray-900">
    React
  </h2>

  {/* Description */}
  <p className="mb-6 text-sm leading-6 text-gray-500">
    A declarative, component-based JavaScript library for building modern
    user interfaces.
  </p>

  {/* Category + Difficulty */}
  <div className="mb-5 flex items-center justify-between">

    <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
      Frontend
    </span>

    <span className="text-xs font-medium text-gray-500">
      Beginner-Friendly
    </span>

  </div>

  {/* Rating */}
  <div className="mb-5 flex items-center gap-2">
    <span className="text-yellow-400">★</span>

    <span className="text-sm font-semibold text-gray-800">
      4.9
    </span>

    <span className="text-xs text-gray-400">
      Rating
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
        </div>
    );
};

export default TechnologyList;