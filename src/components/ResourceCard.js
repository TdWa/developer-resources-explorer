import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ResourceCard.css";
import { selectLoggedinUser } from "../store/selectors";
import { toggleFavorite } from "../store/developers/actions";

export default function ResourceCard({ id, name, type, tags, url }) {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedinUser);

  return (
    <div id="resourceCard">
      <p>
        <button
          className="favorite"
          onClick={() => {
            dispatch(toggleFavorite(user.id, id));
          }}
        >
          {user.favorites.includes(id) ? "♥" : "♡"}
        </button>
        <strong>{name}</strong> (<i>{type}</i>) - Find out more at{" "}
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </p>
      <div className="container">
        {tags.map((tag, i) => {
          if (i === 0 && tag.includes(",")) {
            return tag.split(",").map((splitTag) => {
              return (
                <div key={splitTag} className="tag">
                  {splitTag}
                </div>
              );
            });
          }
          return (
            <div key={tag} className="tag">
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
}
