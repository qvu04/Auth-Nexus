import { useForm } from "react-hook-form"
import type { IRegister } from "../../types/auth.type"
import { REGEX_EMAIL } from "../../consonant/regex"
import ErrorMsg from "../../components/Common/ErrorMsg"
import { CgDanger } from "react-icons/cg";
const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IRegister>({ mode: "onBlur" })
    const onSubmit = () => {
        console.log("Đăng ký thành công");
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center rounded-xl border w-80 md:w-100 h-full bg-white'>
            <div className="mb-2 md:p-3 relative">
                <input type="text"
                    {...register("firstName", { required: "First Name cannot be empty" })}
                    placeholder={errors.firstName ? "" : "First Name"}
                    className={errors.firstName ? 'border border-red-400 py-3 pl-4 mt-5 rounded w-72 md:w-84' : 'border mt-5 pl-4 w-72 md:w-84 rounded-sm py-3 border-gray-400 text-black font-bold'}
                />
                <ErrorMsg error={errors.firstName} />
                {errors.firstName && (
                    <div className="absolute top-9 right-4 md:top-12 md:right-8">
                        <CgDanger className="text-red-400 text-xl" />
                    </div>
                )}
            </div>
            <div className="mb-2 md:p-3 relative">
                <input type="text"
                    {...register("lastName", { required: "Last Name cannot be empty" })}
                    placeholder={errors.lastName ? "" : "Last Name"}
                    className={errors.lastName ? 'border border-red-400 py-3 pl-4 rounded w-72 md:w-84' : 'border rounded w-72 md:w-84 py-3 pl-4 border-gray-400 text-black font-bold'}
                />
                <ErrorMsg error={errors.lastName} />
                {errors.lastName && (
                    <div className="absolute top-4 right-4 md:top-7 md:right-8">
                        <CgDanger className="text-red-400 text-xl" />
                    </div>
                )}
            </div>
            <div className="mb-2 md:p-3 relative">
                <input type="text"
                    {...register("emailAddress", {
                        required: "Email Address cannot be empty", pattern: {
                            value: REGEX_EMAIL,
                            message: "Looks like this is not an email"
                        }
                    })}
                    placeholder={errors.emailAddress ? "email@example/com" : "Email Address"}
                    className={errors.emailAddress ? 'border text-red-400 border-red-400 py-3 pl-6 rounded w-72 md:w-84' : 'border rounded w-72 md:w-84 py-3 pl-4 border-gray-400 text-black font-bold'}
                />
                <ErrorMsg error={errors.emailAddress} />
                {errors.emailAddress && (
                    <div className="absolute top-4 right-4 md:top-7 md:right-8">
                        <CgDanger className="text-red-400 text-xl" />
                    </div>
                )}
            </div>
            <div className="md:p-3 relative">
                <input type="password"
                    {...register("password", { required: "Password cannot be empty" })}
                    placeholder={errors.password ? "" : "Password"}
                    className={errors.password ? 'border border-red-400 py-3 pl-4 rounded w-72 md:w-84' : 'border rounded w-72 md:w-84 py-3 pl-4 border-gray-400 text-black font-bold'}
                />
                <ErrorMsg error={errors.password} />
                {errors.password && (
                    <div className="absolute top-4 right-4 md:top-7 md:right-8">
                        <CgDanger className="text-red-400 text-xl" />
                    </div>
                )}
            </div>
            <div className='flex flex-col items-center justify-center text-center'>
                <button type='submit' className='bg-green-400 cursor-pointer hover:bg-green-300 md:px-18 text-white mt-3 mb-3 py-3 px-12 rounded-sm'>CLAIM YOUR FREE TRIAL</button>
                <p className='text-gray-400 text-[10px] mb-3 whitespace-pre-line md:whitespace-nowrap'>By clicking the button, you are agreeing to {"\n"} our <span className='text-red-400'>Terms and Services</span></p>
            </div>

        </form>
    )
}
export default RegisterForm