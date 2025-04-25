
import { useForm } from 'react-hook-form';

function Singup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitting the form", data);
    reset();
  }

  return (
    <div className="max-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-center">Sign-Up Form</h1>

        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-gray-700 font-medium">
            First Name
          </label>
          <input
            type="text"
            {...register('firstName', { required: true, minLength: 3, maxLength: 20 })}
            className="mt-1 w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              First name is required (3-20 characters)
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-medium">
            Last Name
          </label>
          <input
            type="text"
            {...register('lastName', {
              required: true,
              minLength: 3,
              maxLength: 20,
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only alphabetic characters allowed",
              },
            })}
            className="mt-1 w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message || 'Last name is required (3-20 characters)'}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            E-mail
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email address',
              },
            })}
            className="mt-1 w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Skill Category */}
        <div>
          <label htmlFor="skillCategory" className="block text-gray-700 font-medium">
           Payment Method
          </label>
          <select
            {...register('skillCategory', { required: true })}
            className="mt-1 w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            <option value="frontend">UPI</option>
            <option value="backend">Bank Account</option>
          </select>
          {errors.skillCategory && (
            <p className="text-red-500 text-sm mt-1">Please select a skill category</p>
          )}
        </div>

        {/* Portfolio Link */}
        <div>
          <label htmlFor="portfolio" className="block text-gray-700 font-medium">
            Portfolio Link
          </label>
          <input
            type="url"
            {...register('portfolio', {
              required: 'Portfolio link is required',
              pattern: {
                value: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([/\w.-]*)*\/?$/,
                message: 'Enter a valid URL',
              },
            })}
            placeholder="https://yourportfolio.com"
            className="mt-1 w-full p-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.portfolio && (
            <p className="text-red-500 text-sm mt-1">{errors.portfolio.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-black py-2 rounded-md  hover:bg-blue-700 transition disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 text-center font-medium">Submit Successfully!</p>
        )}
      </form>
    </div>
  );
}

export default Singup;
