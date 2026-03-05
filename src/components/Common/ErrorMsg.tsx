import type { IErrorMsg } from "../../types/error.type"

const ErrorMsg = ({ error }: IErrorMsg) => {
    if (!error) return
    return (
        <div className="text-red-400 text-[10px] text-right mt-3">{error.message}</div>
    )
}

export default ErrorMsg