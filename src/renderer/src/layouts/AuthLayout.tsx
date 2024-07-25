type AuthLayoutProps = React.PropsWithChildren<{}>
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
};

export default AuthLayout;