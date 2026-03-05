import RegisterForm from './RegisterForm'

const RegisterPage = () => {
    return (
        <div className='flex flex-col md:flex-row md:min-h-screen min-h-screen text-white items-center justify-center'>
            <div className='text-center md:text-left md:mr-20'>
                <p className='text-xl md:text-5xl font-bold mb-3 mt-10 whitespace-pre-line'>Learn to code by {"\n"} watching others</p>
                <p className='mb-10 md:mt-10 md:whitespace-pre-line'>See how experienced developers solve problems in real-time.{"\n"}
                    Watching scripted tutorials is great, but understanding how {"\n"} developers think is invaluable.</p>
            </div>
            <div className='w-80 md:w-100'>
                <div className='bg-purple-700 border xl:flex rounded-xl border-none shadow-xl/20 mb-5'>
                    <p className='text-[16px] items-center md:whitespace-nowrap text-center py-5 px-12 md:py-4 whitespace-pre-line'>
                        <span className='font-semibold'>Try it free 7 days </span>
                        then {"\n"} $20/mo.thereather</p>
                </div>
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage