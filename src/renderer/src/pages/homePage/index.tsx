import useNavigationService from "@renderer/hooks/navigationService";
const HomePage: React.FC = () => {
    const { navigateTo, navigateWithAuth } = useNavigationService();

    const handleClick = () => {
        navigateWithAuth('/privatePage/settings', true);
    }

    return (
        <div onClick={handleClick}>this is HomePage!</div>
    )
}

export default HomePage