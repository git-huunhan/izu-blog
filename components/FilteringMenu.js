import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LIST_VIEW_ICONS = ["list", "border-all"];

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className="filtering-menu mb-2">
      <FontAwesomeIcon
        color="#99A9CC"
        fixedWidth
        className="clickable"
        size="lg"
        icon={LIST_VIEW_ICONS[filter.view.list]}
        onClick={() => {
          onChange("view", { list: +!filter.view.list });
        }}
      />
    </div>
  );
};

export default FilteringMenu;
