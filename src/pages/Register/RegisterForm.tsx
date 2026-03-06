import { useForm, type SubmitHandler } from "react-hook-form"
import type { IRegister } from "../../types/auth.type"
import { REGEX_EMAIL } from "../../consonant/regex"
import ErrorMsg from "../../components/Common/ErrorMsg"
import { CgDanger } from "react-icons/cg";
import { registerUser } from "../../api/authApi";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IRegister>({ mode: "onBlur" })
    const onSubmit: SubmitHandler<IRegister> = async (data) => {
        try {
            const res = await registerUser({
                email: data.email,
                password: data.password
            });
            console.log("Đăng kí thành công: ", res)
            toast.success("Đăng ký thành công");
        } catch (error) {
            console.log(error);
            toast.error("Đăng ký thất bại");
        }
    };
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
                    {...register("email", {
                        required: "Email Address cannot be empty", pattern: {
                            value: REGEX_EMAIL,
                            message: "Looks like this is not an email"
                        }
                    })}
                    placeholder={errors.email ? "email@example/com" : "Email Address"}
                    className={errors.email ? 'border text-red-400 border-red-400 py-3 pl-6 rounded w-72 md:w-84' : 'border rounded w-72 md:w-84 py-3 pl-4 border-gray-400 text-black font-bold'}
                />
                <ErrorMsg error={errors.email} />
                {errors.email && (
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
                <button disabled={isSubmitting} type='submit' className='bg-green-400 cursor-pointer min-w-72 md:min-w-84 flex items-center justify-center hover:bg-green-300 md:px-18 text-white mt-3 mb-3 py-3 px-12 rounded-sm'>{isSubmitting ? <CgSpinner className="animate-spin  text-xl" /> : "CLAIM YOUR FREE TRIAL"}</button>
                <p className='text-gray-400 text-[10px] mb-3 whitespace-pre-line md:whitespace-nowrap'>By clicking the button, you are agreeing to {"\n"} our <span className='text-red-400'>Terms and Services</span></p>
            </div>

        </form>
    )
}
export default RegisterForm 