import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Buttons/Button';
import Timer from './HeaderTimer';
import HeaderNotification from './HeaderNotification';
import HeaderCart from '../../Views/Cart/HeaderCart';
import HeaderFullScreen from './HeaderFullScreen';
import SwitchTheme from '../../Store/SwitchTheme';
import './Header.css';
import User from '../../../assets/img/user.png';
const Header = () => {
    return(
        <header id="header" className="position-fixed top-0 end-0 px-3 px-md-4 py-3 transition">
            <div className="row align-items-center">
                <div className="col-md-6 d-none d-md-block">
                    <form action="">
                        <div className="field-container d-flex align-items-center gap-2">
                            <Button button={{ type: 'submit', className: 'bg-transparent p-0 border-0' }}>
                                <SearchIcon className="fs-xl" />
                            </Button>
                            <Input containerClass="flex-fill" input={{ type: 'search', className: 'form-control bg-transparent px-0 border-0', placeholder: 'Search' }} />
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className="d-flex align-items-center justify-content-md-end gap-3 gap-md-4">
                        <Button button={{ id: 'sideNavToggler', className: 'd-block d-md-none p-0 bg-transparent border-0' }}>
                            <MenuIcon />
                        </Button>
                        <SwitchTheme />
                        <HeaderFullScreen />
                        <HeaderCart />
                        <HeaderNotification />
                        <Timer />
                        <div className="dropdown">
                            <Button button={{ type: 'button', className: 'btn p-0 border-0 dropdown-toggle', 'data-bs-toggle': 'dropdown', 'aria-expanded': 'false' }}>
                                <img src={User} className="w-100 h-100 object-fit-cover object-position-center" alt="Richard Ontario" />
                            </Button>
                            <ul className="dropdown-menu p-2 border-0 rounded-16 shadow">
                                <li className="user px-3 py-2 d-flex align-items-center gap-2 justify-content-between bg-light rounded-8">
                                    <div className="profile d-flex align-items-center gap-2">
                                        <a className="avatar d-block rounded-circle overflow-hidden" style={{width: '1.625rem', height: '1.625rem'}}>
                                            <img src={User} alt="Richard Ontario" className="w-100 h-100 object-fit-cover object-position-center" />
                                        </a>
                                        <a className="fw-medium text-dark">Richard Ontario</a>
                                    </div>
                                    <a className="text-dark">
                                        <LogoutOutlinedIcon className="fs-xl" />
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center gap-2 active">
                                        <SpaceDashboardOutlinedIcon className="fs-xl" />
                                        <span className="d-block">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item d-flex align-items-center gap-2">
                                        <SettingsOutlinedIcon className="fs-xl" />
                                        <span className="d-block">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;