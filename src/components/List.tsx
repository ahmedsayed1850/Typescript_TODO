import React from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
}
const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li className="List">
        <div className="List-header">
          <img className="List-img" src={person.url} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} Years old</p>
        <p className="List-note">{person.note}</p>
      </li>
    ));
  };
  return <div>{renderList()}</div>;
};

export default List;
