import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ChecklistIcon from '@mui/icons-material/Checklist';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SavingsIcon from '@mui/icons-material/Savings';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import Button from '../../UI/Buttons/Button';
import './SideNav.css';
const SideNav = () => {
    return(
        <aside id="sideNavigation" className="bg-light position-fixed top-0 bottom-0 start-0 overflow-x-auto transition">
            <div className="menu-container h-100 d-flex flex-column justify-content-between py-3">
                <nav className="mb-4">
                    <Button button={{ className: 'btn btn-primary btn-sm d-flex align-items-center gap-1 mb-4 mx-3' }}>
                        <AddIcon className="fs-lg" />
                        <span className="d-block">Add Project</span>
                    </Button>
                    <ul className="main-menu list-style-none d-flex flex-column gap-2 px-3 pb-4 mb-4 border-bottom border-gray-300">
                        <li className="active">
                            <a href="#" className="d-flex align-items-center gap-1">
                                <ChecklistIcon className="fs-lg" />
                                <span className="d-block">Task Today</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex align-items-center gap-1">
                                <LeaderboardOutlinedIcon className="fs-lg" />
                                <span className="d-block">Report</span>
                            </a>
                        </li>
                    </ul>
                    <div className="submenu-container px-3">
                        <h6 className="text-gray mb-3">PROJECT</h6>
                        <ul className="submenu d-flex flex-column gap-3">
                            <li>
                                <a href="#" className="d-flex align-items-center gap-2 text-gray text-nowrap">
                                    <MultipleStopIcon className="fs-lg text-gray-600" />
                                    <span className="d-block">PX to REM converter</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="d-flex align-items-center gap-2 text-gray text-nowrap">
                                    <SavingsIcon className="fs-lg text-gray-600" />
                                    <span className="d-block">Investment Calculator</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <a href="#" className="px-3 d-flex align-items-center gap-2 fw-medium">
                    <LogoutOutlinedIcon className="fs-lg" />
                    <span className="d-block">Logout</span>
                </a>
            </div>
        </aside>
    )
}
export default SideNav;