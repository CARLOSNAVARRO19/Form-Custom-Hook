import { useForm } from "../hooks/useForm";
import DarkMode from "./DarkMode";
const Form = () => {
  const inicialForm = {
    username: "",
    email: "",
    password: "",
  };

  const { formState, username, email, password, onInputChange } =
    useForm(inicialForm);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  return (
    <div className="grid place-items-center h-screen dark:text-white">
      <form
        className="relative grid gap-y-4 border rounded-md pt-12 px-6 pb-6 hover:border-sky-400 duration-300 w-[90%] md:w-[50%] lg:w-[40%] xl:w-[20%]"
        onSubmit={onSubmit}
      >
        <DarkMode />

        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={onInputChange}
          required
          className="border rounded-md p-2 focus:outline-none hover:border-sky-400 transition-colors duration-300 bg-transparent"
        />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={onInputChange}
          required
          className="border rounded-md p-2 focus:outline-none hover:border-sky-400 transition-colors duration-300 bg-transparent"
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={onInputChange}
          required
          className="border rounded-md p-2 focus:outline-none hover:border-sky-400 transition-colors duration-300 bg-transparent"
        />

        <button
          className="border rounded-md py-2 hover:text-sky-300 hover:underline hover:border-sky-400 transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
