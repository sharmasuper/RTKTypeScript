import { useForm, SubmitHandler } from "react-hook-form";
import { useAddStudentsMutation, useGetStudentQuery, useUpdateStudentMutation } from "../Feature/StudentSlices";
import { useNavigate, useParams } from "react-router-dom";

type Inputs = {
  example: string;
  exampleRequired: string;
}

function Create() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [addStudents] = useAddStudentsMutation();
  const [updateStudents] = useUpdateStudentMutation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetStudentQuery(id!);

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      if (data) {
        const updatedData = { ...data, ...formData }; // Merging existing data with form data
        await updateStudents(updatedData);
        console.log("Data updated successfully", updatedData);
      } else {
        const result = await addStudents(formData);
        console.log("Data added successfully", result);
      }
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={data?.title || ""} {...register("example")} />
        <input defaultValue={data?.body || ""} {...register("exampleRequired")} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Create;
