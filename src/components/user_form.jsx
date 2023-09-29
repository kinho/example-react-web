import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Alert } from './alert_form'

// eslint-disable-next-line react/prop-types
export const UserForm = ({ onSubmit, signup, login }) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(20, 'Must be 15 characters or less')
        .required('Username is required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .max(32, 'Must be 15 characters or less')
        .required('Password is required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
      onSubmit(values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          placeholder="username"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="my-4">
            <Alert message={`${formik.errors.username}`} index={1} />
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          placeholder="••••••••"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="my-4">
            <Alert message={`${formik.errors.password}`} index={2} />
          </div>
        ) : null}
      </div>

      {signup && (
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Register
        </button>
      )}

      {login && (
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Login
        </button>
      )}
    </form>
  )
}