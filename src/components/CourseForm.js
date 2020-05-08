import React from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";

function CourseForm(props) {
  return (
    <form>
      <TextInput
        id="title"
        label="Title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
      />

      <SelectInput
        id="author"
        label="Author"
        name="authorId"
        options="Cory House,Scott Allen, Bruno Calixto"
        onChange={props.onChange}
      />

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
