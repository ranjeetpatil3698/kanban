import React from "react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/core";

export default function ColumnHeading(props) {
  return (
    <div>
      <Editable defaultValue={props.value} width="32" pl="2">
        <EditablePreview />
        <EditableInput />
      </Editable>
    </div>
  );
}
