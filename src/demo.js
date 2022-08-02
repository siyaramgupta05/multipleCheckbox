import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckboxesGroup() {
  const defaultNames = ["bill", "Manos"];
  const { control, handleSubmit } = useForm({
    defaultValues: { names: defaultNames }
  });

  const [checkedValues, setCheckedValues] = useState(defaultNames);

  function handleSelect(checkedName) {
    // could do it like this as well:

    // const names = getValues().names;
    // const newNames = names?.includes(checkedName)
    //   ? names?.filter(name => name !== checkedName)
    //   : [...(names ?? []), checkedName];
    alert("checkedValues " + checkedValues);
    alert("checkedName " + checkedName);

    const newNames = checkedValues?.includes(checkedName)
      ? checkedValues?.filter((name) => name !== checkedName)
      : [...(checkedValues ?? []), checkedName];
    setCheckedValues(newNames);
    alert("newNames " + newNames);
    return newNames;
  }

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {["bill", "luo", "Manos", "user120242"].map((name) => (
        <input
          type="checkbox"
          checked={checkedValues.includes(name)}
          onChange={() => handleSelect(name)}
        />

        // <FormControlLabel
        //   control={
        //     <Controller
        //       name="names"
        //       render={({ onChange: onCheckChange }) => {
        //         return (
        //           <Checkbox
        //             checked={checkedValues.includes(name)}
        //             onChange={() => onCheckChange(handleSelect(name))}
        //           />
        //         );
        //       }}
        //       control={control}
        //     />
        //   }
        //   key={name}
        //   label={name}
        // />
      ))}
      <button>Submit</button>
    </form>
  );
}
