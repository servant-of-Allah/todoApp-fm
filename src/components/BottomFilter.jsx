import React, { useState, useEffect } from "react";
import FilterButton from "./FilterButton";

function BottomFilter({
  taskCount,
  setFilter,
  filterNames,
  filter,
  clearCompleted,
}) {
  const [isDesktop, setIsDesktop] = useState(true);

  const filterList = filterNames.map((name) => (
    <FilterButton
      name={name}
      key={name}
      ispressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const taskNoun = taskCount !== 1 ? "items" : "item";
  const mobileTemplate = (
    <li className="app__filter">
      <div className="section__select app__filter-mobile">
        <p className="item-count">
          {taskCount} {taskNoun} left
        </p>
        <button
          type="button"
          className="filter__button-light"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
      <div className="section__select flex__center filter__buttons-mobile">
        {filterList}
      </div>
    </li>
  );

  const desktopTemplate = (
    <li className="app__filter">
      <div className="section__select app__filter-desktop">
        <p className="item-count">
          {taskCount} {taskNoun} left
        </p>
        <div className="flex__center filter__buttons-desktop">{filterList}</div>
        <button
          type="button"
          className="filter__button-light"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </li>
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // call the handler once when the component mounts

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop ? desktopTemplate : mobileTemplate;
}

export default BottomFilter;
