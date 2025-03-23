import Auth from "@/app/context/Auth-Context";
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    return <Auth>{children}</Auth>;
  
};

export default AuthProvider;
