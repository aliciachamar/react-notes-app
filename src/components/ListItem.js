import React from 'react';
import { Link } from "react-router-dom";
import notes from '../assets/data';

const ListItem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{note.body}</h3>
      </div>
    </Link>
  )
}

export default ListItem;
