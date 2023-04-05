import React from "react";

function FilterButton({ name, ispressed, setFilter }) {
  return (
    <button
      type="button"
      className="filter__button-bold"
      aria-pressed={ispressed ? "true" : "false"}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  );
}

export default FilterButton;
