import { useState } from "react";

export const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    return {
      value,
      setValue,
      reset: () => setValue(""),
      bind: {
        value,
        onChange: (event: React.FormEvent<EventTarget>) => {
          setValue((event.target as HTMLInputElement).value);
        },
      },
    };
  };