import { FormLogin } from "./form-login";
const Login: React.FC = () => {
  return (
    <div className="flex flex-row w-full h-screen justify-center items-center bg-[url('../../assets/city.jpg')] bg-cover bg-blend-color bg-black/75 ">
      <FormLogin />
    </div>
  );
};

export default Login;
