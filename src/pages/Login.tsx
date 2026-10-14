import { useContext } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";

export interface LoginFormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const userContext = useContext(UserContext);

  const { setUser } = userContext || { setUser: () => {} };

  const submitLogin: SubmitHandler<LoginFormValues> = async (data) => {
    const loggedUser = {
      id: "1",
      email: data.email,
      name: "Julian",
    };

    setUser(loggedUser);

    console.log("Usuario logueado:", loggedUser);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-12 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900 sm:p-10">
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            PeliApp
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Iniciar sesión
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Ingresa tus datos para continuar.
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={handleSubmit(submitLogin)}
          noValidate
        >
          <div>
            <label
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              autoComplete="email"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              id="email"
              placeholder="nombre@correo.com"
              type="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email", {
                required: "El correo electrónico es obligatorio.",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Ingresa un correo electrónico válido.",
                },
              })}
            />
            {errors.email && (
              <p
                className="mt-2 text-sm text-red-600"
                id="email-error"
                role="alert"
              >
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              autoComplete="current-password"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
              id="password"
              placeholder="Ingresa tu contraseña"
              type="password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              {...register("password", {
                required: "La contraseña es obligatoria.",
              })}
            />
            {errors.password && (
              <p
                className="mt-2 text-sm text-red-600"
                id="password-error"
                role="alert"
              >
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-slate-900"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
          ¿Quieres volver a explorar?{" "}
          <Link
            className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
            to="/"
          >
            Ir al inicio
          </Link>
        </p>
      </div>
    </section>
  );
};
