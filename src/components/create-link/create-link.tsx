import * as React from "react";
import { useForm } from "react-hook-form";
import { getUrl } from "../../utils/get-url";

interface Props {
  setUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

interface FormValues {
  subject: string;
}

const CreateLink: React.FunctionComponent<Props> = ({ setUrl }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => setUrl(getUrl(data.subject));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <input
        placeholder="Enter your subject"
        {...register("subject", { required: true })}
        className="text-black"
      />
      {errors.subject && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default CreateLink;
