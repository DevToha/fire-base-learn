

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
    }

    return (
        <div>
            <div className="mx-auto md:w-1/3 mt-10 mb-10">
                <h3 className="text-3xl mb-8 font-semibold">Please Register</h3>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 py-2 px-4 border-2 border-black rounded-md" type="email" placeholder="Email Address" name="email" id="" />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4 border-2 border-green-400 rounded-md" type="password" placeholder="Password" name="password" id="" />
                    <br />
                    <input className="cursor-pointer mb-4 w-3/4 py-2 px-4 border-2 rounded-md border-indigo-500 bg-slate-200" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;