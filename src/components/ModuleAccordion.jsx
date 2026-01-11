import { ChevronDown, ChevronRight } from "lucide-react";

export default function ModuleAccordion({
  module,
  expanded,
  onToggle,
  colors,
}) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <button
        onClick={onToggle}
        className={`w-full p-4 flex justify-between bg-gradient-to-r ${colors.card} text-white`}
      >
        <div>
          <strong>Module {module.module}</strong> – {module.title}
        </div>
        {expanded ? <ChevronDown /> : <ChevronRight />}
      </button>

      {expanded && (
        <div className="p-4 bg-gray-50">
          <ul>
            {module.topics.map((t, i) => (
              <li key={i}>• {t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
