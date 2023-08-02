import { TABS } from "../store/actions/type";

import { useDispatch } from "react-redux";

import { toggleTab } from "../store/actions";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();

  return TABS.map((tab) => (
    <button
      className={tab === currentTab ? "button selected" : "button"}
      onClick={() => dispatch(toggleTab(tab))}
    >
      {tab}
    </button>
  ));
};

export default Tabs;
