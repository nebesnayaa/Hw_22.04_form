import { useForm } from "react-hook-form";
import axios from 'axios';

function PutForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const formDataSet = async (data: any, e: any) => {
    console.log(data);
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3000/users/' + data.id, data);
      if (response.status = 201) {
        console.log(response);
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  console.log(errors);

  return (<>
    <div className="form">
      <h1>Hw react 1</h1>
      <h3>Put Form</h3>

      <form action="#" onSubmit={ handleSubmit(formDataSet) }>
        <div className="mb-3">
          <label htmlFor="inputId" className="form-label title">Id</label>
          <input type="text" {...register("id", { required: true })} 
                 className="form-control border-info" id="inputId" />
        </div>

        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label title">Email address</label>
          <input type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                 className="form-control border-info" id="inputEmail" aria-describedby="helpEmail" />
          <div id="helpEmail" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="inputLogin" className="form-label title">Login</label>
          <input type="text" {...register("login", { required: true })} 
                 className="form-control border-info" id="inputLogin" />
        </div>

        <div className="mb-3">
          <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="radio" {...register("gender")} 
                   className="btn-check" value="male" id="radio1" checked />
            <label className="btn btn-outline-info" htmlFor="radio1">Male</label>

            <input type="radio" {...register("gender")} 
                   className="btn-check" value="female" id="radio2" />
            <label className="btn btn-outline-info" htmlFor="radio2">Female</label>
          </div>
        </div>

        <div className="mb-3">
          <select className="form-select border-info" {...register("role")} aria-label="Select role">
            <option value="user">User</option>
            <option value="user">Manager</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="mb-3">
          <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            <input type="radio" {...register("status")} 
                   className="btn-check" value="enable" id="radio3" checked />
            <label className="btn btn-outline-info" htmlFor="radio3">Enable</label>

            <input type="radio" {...register("status")} 
                   className="btn-check" value="disable" id="radio4" />
            <label className="btn btn-outline-info" htmlFor="radio4">Disable</label>
          </div>
        </div>

        <button type="submit" className="btn btn-info">Submit</button>
      </form>
    </div>
  </>
  );
};

export default PutForm;