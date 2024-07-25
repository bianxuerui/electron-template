type MainLayoutProps = React.PropsWithChildren<{}>;
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;