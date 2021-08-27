import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LIST_VIEW_ICONS = ["th-list", "th-large"];
const DATE_FILTERING_ICONS = ["sort-numeric-down", "sort-numeric-up"];

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className="filtering-menu mb-2 d-flex">
      <div className="p-2 filter-button">
        <FontAwesomeIcon
          fixedWidth
          className="clickable"
          size="lg"
          icon={LIST_VIEW_ICONS[filter.view.list]}
          onClick={() => {
            onChange("view", { list: +!filter.view.list });
          }}
        />
      </div>
      <div className="p-2">
        <FontAwesomeIcon
          fixedWidth
          className="clickable"
          size="lg"
          icon={DATE_FILTERING_ICONS[filter.date.asc]}
          onClick={() => onChange("date", { asc: +!filter.date.asc })}
        />
      </div>
    </div>
  );
};

export default FilteringMenu;
