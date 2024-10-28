import React, { Fragment } from 'react'
import loadScript from '../hooks/loadScript'
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
    loadScript("/assets/js/app.js");

    return (
        <Fragment>
            <div id="layout-wrapper">
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box ">
                                <a href="index.html" className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img className="nav_logo" src="/public/Kelaxalogo.png" alt="" height="30" />
                                    </span>
                                    <span className="logo-lg">
                                        <img className="nav_logo" src="/public/Kelaxalogo.png" alt="" height="30" /> <span className="logo-txt">Kelaxa Admin</span>
                                    </span>
                                </a>
                                <a href="index.html" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img className="nav_logo" src="/public/Kelaxalogo.png" alt="" height="30" />
                                    </span>
                                    <span className="logo-lg">
                                        <img className="nav_logo" src="/public/Kelaxalogo.png" alt="" height="30" /> <span className="logo-txt">Kelaxa Admin</span>
                                    </span>
                                </a>
                            </div>
                            <button type="button" className="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                                <i className="fa fa-fw fa-bars"></i>
                            </button>
                            <form className="app-search d-none d-lg-block">
                                <div className="position-relative">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <button className="btn btn-primary" type="button"><i className="bx bx-search-alt align-middle"></i></button>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex">
                            <div className="dropdown d-inline-block d-lg-none ms-2">
                                <button type="button" className="btn header-item" id="page-header-search-dropdown"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i data-feather="search" className="icon-lg"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                    aria-labelledby="page-header-search-dropdown">
                                    <form className="p-3">
                                        <div className="form-group m-0">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Search Result" />

                                                <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="dropdown d-none d-sm-inline-block">
                                <button type="button" className="btn header-item"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img id="header-lang-img" src="/assets/images/flags/us.jpg" alt="Header Language" height="16" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="en">
                                        <img src="/assets/images/flags/us.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">English</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                                        <img src="/assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Spanish</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                                        <img src="/assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">German</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                                        <img src="/assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Italian</span>
                                    </a>
                                    <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                                        <img src="/assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Russian</span>
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown d-none d-sm-inline-block">
                                <button type="button" className="btn header-item" id="mode-setting-btn">
                                    <i data-feather="moon" className="icon-lg layout-mode-dark"></i>
                                    <i data-feather="sun" className="icon-lg layout-mode-light"></i>
                                </button>
                            </div>
                            <div className="dropdown d-none d-lg-inline-block ms-1">
                                <button type="button" className="btn header-item"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i data-feather="grid" className="icon-lg"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                    <div className="p-2">
                                        <div className="row g-0">
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="/assets/images/brands/github.png" alt="Github" />
                                                    <span>GitHub</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="/assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                    <span>Bitbucket</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="/assets/images/brands/dribbble.png" alt="dribbble" />
                                                    <span>Dribbble</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row g-0">
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="/assets/images/brands/dropbox.png" alt="dropbox" />
                                                    <span>Dropbox</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="/assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                                                    <span>Mail Chimp</span>
                                                </a>
                                            </div>
                                            <div className="col">
                                                <a className="dropdown-icon-item" href="#">
                                                    <img src="/assets/images/brands/slack.png" alt="slack" />
                                                    <span>Slack</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item noti-icon position-relative" id="page-header-notifications-dropdown"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i data-feather="bell" className="icon-lg"></i>
                                    <span className="badge bg-danger rounded-pill">5</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                    aria-labelledby="page-header-notifications-dropdown">
                                    <div className="p-3">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h6 className="m-0"> Notifications </h6>
                                            </div>
                                            <div className="col-auto">
                                                <a href="#!" className="small text-reset text-decoration-underline"> Unread (3)</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-simplebar style={{ maxHeight: '230px' }}>
                                        <a href="#!" className="text-reset notification-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <img src="/assets/images/users/avatar-3.jpg" className="rounded-circle avatar-sm" alt="user-pic" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">James Lemire</h6>
                                                    <div className="font-size-13 text-muted">
                                                        <p className="mb-1">It will seem like simplified English.</p>
                                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>1 hour ago</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#!" className="text-reset notification-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 avatar-sm me-3">
                                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                        <i className="bx bx-cart"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">Your order is placed</h6>
                                                    <div className="font-size-13 text-muted">
                                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>3 min ago</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#!" className="text-reset notification-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 avatar-sm me-3">
                                                    <span className="avatar-title bg-success rounded-circle font-size-16">
                                                        <i className="bx bx-badge-check"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">Your item is shipped</h6>
                                                    <div className="font-size-13 text-muted">
                                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>3 min ago</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#!" className="text-reset notification-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <img src="/assets/images/users/avatar-6.jpg" className="rounded-circle avatar-sm" alt="user-pic" />
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1">Salena Layfield</h6>
                                                    <div className="font-size-13 text-muted">
                                                        <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>1 hour ago</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="p-2 border-top d-grid">
                                        <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                                            <i className="mdi mdi-arrow-right-circle me-1"></i> <span>View More..</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item right-bar-toggle me-2">
                                    <i data-feather="settings" className="icon-lg"></i>
                                </button>
                            </div>
                            <div className="dropdown d-inline-block">
                                <button type="button" className="btn header-item topbar-light bg-light-subtle border-start border-end" id="page-header-user-dropdown"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img className="rounded-circle header-profile-user" src="/assets/images/users/avatar-10.jpg"
                                        alt="Header Avatar" />
                                    <span className="d-none d-xl-inline-block ms-1 fw-medium">Kopana P</span>
                                    <i className="mdi mdi-chevron-down  d-xl-inline-block"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="apps-contacts-profile.html"><i className="mdi mdi-face-man font-size-16 align-middle me-1"></i> Profile</a>
                                    <a className="dropdown-item" href="auth-lock-screen.html"><i className="mdi mdi-lock font-size-16 align-middle me-1"></i> Lock Screen</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="auth-logout.html"><i className="mdi mdi-logout font-size-16 align-middle me-1"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="vertical-menu">
                    <div data-simplebar className="h-100">
                        <div id="sidebar-menu">
                            <ul className="metismenu list-unstyled" id="side-menu">
                                <li className="menu-title" data-key="t-menu">Menu</li>

                                <li>
                                    <Link to="/" aria-expanded="false">
                                        <i className=" fas fa-home"></i>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> */}
                                        <span data-key="t-dashboard">Dashboard</span>
                                    </Link>
                                </li>

                                <li className="">
                                    <a href="javascript: void(0);" className="has-arrow" aria-expanded="false">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> */}
                                        <i className="fas fa-sms"></i>
                                        <span data-key="t-apps">SMS</span>
                                    </a>
                                    <ul className="sub-menu mm-collapse" aria-expanded="false" style={{ height: "0px" }}>
                                        <li>
                                            <Link to="/sms/user">
                                                <span data-key="t-calendar">User</span>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/sms/sent">
                                                <span data-key="t-chat">Sent SMS</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" aria-expanded="false">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> */}
                                        <i className=" far fa-file-image"></i>
                                        <span data-key="t-pages">Images</span>
                                    </a>
                                    <ul className="sub-menu mm-collapse" aria-expanded="false">
                                        <li><Link to="image/files" data-key="t-starter-page">Starter Page</Link></li>
                                        {/* <li><a href="pages-maintenance.html" data-key="t-maintenance">Maintenance</a></li> */}
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" aria-expanded="false">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> */}
                                        <i className=" far fa-file-image"></i>
                                        <span data-key="t-pages">Cheque</span>
                                    </a>
                                    <ul className="sub-menu mm-collapse" aria-expanded="false">
                                        <li><Link to="cheque/create" data-key="t-starter-page"> Page</Link></li>
                                        {/* <li><a href="pages-maintenance.html" data-key="t-maintenance">Maintenance</a></li> */}
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" aria-expanded="false">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> */}
                                        <i className=" far fa-file-image"></i>
                                        <span data-key="t-pages">Leave</span>
                                    </a>
                                    <ul className="sub-menu mm-collapse" aria-expanded="false">
                                        <li><Link to="leave/create" data-key="t-starter-page"> Leave Request</Link></li>
                                        {/* <li><a href="pages-maintenance.html" data-key="t-maintenance">Maintenance</a></li> */}
                                    </ul>
                                </li>

                                <li>
                                    <a href="javascript: void(0);" className="has-arrow" aria-expanded="false">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> */}
                                        <i className=" far fa-file-image"></i>
                                        <span data-key="t-pages">KanBanBoardMain</span>
                                    </a>
                                    <ul className="sub-menu mm-collapse" aria-expanded="false">
                                        <li><Link to="KanBanBoardMain/create" data-key="t-starter-page">KanBanBoardMain</Link></li>
                                        {/* <li><a href="pages-maintenance.html" data-key="t-maintenance">Maintenance</a></li> */}
                                    </ul>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="page-content">
                        <Outlet />
                    </div>
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6">
                                    {new Date().getFullYear()} © Kelaxa.
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-sm-end d-none d-sm-block">
                                        Design & Develop by <Link to="#!" className="text-decoration-underline">Themesbrand</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div >
            <div className="right-bar">
                <div data-simplebar className="h-100">
                    <div className="rightbar-title d-flex align-items-center p-3">
                        <h5 className="m-0 me-2">Theme Customizer</h5>
                        <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
                            <i className="mdi mdi-close noti-icon"></i>
                        </a>
                    </div>
                    <hr className="m-0" />

                    <div className="p-4">
                        <h6 className="mb-3">Layout</h6>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="layout"
                                id="layout-vertical" value="vertical" />
                            <label className="form-check-label" htmlFor="layout-vertical">Vertical</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="layout"
                                id="layout-horizontal" value="horizontal" />
                            <label className="form-check-label" htmlFor="layout-horizontal">Horizontal</label>
                        </div>

                        <h6 className="mt-4 mb-3 pt-2">Layout Mode</h6>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="layout-mode"
                                id="layout-mode-light" value="light" />
                            <label className="form-check-label" htmlFor="layout-mode-light">Light</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="layout-mode"
                                id="layout-mode-dark" value="dark" />
                            <label className="form-check-label" htmlFor="layout-mode-dark">Dark</label>
                        </div>

                        <h6 className="mt-4 mb-3 pt-2">Direction</h6>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="layout-direction"
                                id="layout-direction-ltr" value="ltr" />
                            <label className="form-check-label" htmlFor="layout-direction-ltr">LTR</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="layout-direction"
                                id="layout-direction-rtl" value="rtl" />
                            <label className="form-check-label" htmlFor="layout-direction-rtl">RTL</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightbar-overlay"></div>
        </Fragment >
    )
}

export default AdminLayout;