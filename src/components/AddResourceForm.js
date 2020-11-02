import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addResource } from "../store/resources/actions";

export default function AddResourceForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    type: "library",
    tags: [],
    url: "",
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addResource(form.name, form.type, form.tags, form.url));
        }}
      >
        <h2>Add a new resource</h2>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
        </p>
        <p>
          <label>
            Type:{" "}
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value={"library"}>library</option>
              <option value={"tool"}>tool</option>
              <option value={"website"}>website</option>
              <option value={"resource"}>resource</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Tags (comma-seperated):{" "}
            <input
              type="text"
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: [e.target.value] })}
            />
          </label>
        </p>
        <p>
          <label>
            URL:{" "}
            <input
              type="text"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
            />
          </label>
        </p>
        <p>
          <button type="submit">Add this resource!</button>
        </p>
      </form>
    </div>
  );
}
