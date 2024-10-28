import { EventHandler, FC, ReactElement, useEffect, useState } from 'react'
import CustomDataTable from '../../../components/CustomDataTable'
import BsModal from '../../../components/BsModal'
import Http from '../../../tools/Http'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TableColumn } from 'react-data-table-component'
import { toast } from 'react-toastify'
import CustomerForm from '../../../components/SmsUserForm'
import { firstLetterCapital } from '../../../services/common'
import SmsUserForm from '../../../components/SmsUserForm'
import { getSmsUsers } from '../../../redux/slices/smsUserSlice'
import SmsUserView from '../../../components/SmsUserView'

type SmsUserPageProps = {
    close: EventHandler<any>;
}

const SmsUserPage: FC<SmsUserPageProps> = (): ReactElement => {
    const [showAdd, setShowAdd] = useState(false);
    const [showView, setShowView] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const { smsUsers } = useSelector<any, any>(state => state.smsUser);
    const [userId, setUserId] = useState<number | null>(null);

    const fetchAll = () => {
        if (!searchParams.get('size')) {
            searchParams.set('size', '10');
        }

        Http.get(`/user?${searchParams.toString()}`).then(response => {
            dispatch(getSmsUsers(response.data));
        });
    }

    useEffect(() => {
        if (location.pathname.includes("edit")) {
            openModal();
        }
    }, [location.pathname]);

    useEffect(() => {
        fetchAll();
    }, [searchParams])



    const handleDelete = (user_id: string) => {
        Http.delete(`/user/${user_id}`)
            .then(response => {
                fetchAll();
                toast.success(response.data.meta.message);
            })
            .catch(error => {
                console.log(error);
                toast.error(error.meta.message);
            });
    }

    const openModal = () => {
        setShowAdd(true);
    }

    const closeModal = () => {
        setShowAdd(false);
        setSelectedUser(null);
        navigate("/sms/user");
        setUserId(null);
    };


    const handleRowClick = (row: any) => {
        setUserId(row.user_id);
        setShowView(true);
    };

    const dataColumns: TableColumn<any>[] = [
        {
            name: 'first Name',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5 },
            selector: (row: any) => row.first_name,
            // selector: (row: any) => `${firstLetterCapital(row.first_name)} ${firstLetterCapital(row.last_name)}`,
        },
        {
            name: 'Mobile',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5 },
            selector: (row: any) => row.mobile,
        },
        {
            name: 'E-mail',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => row.email,
        },
        {
            name: 'Mask',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => row.email,
        },
        {
            name: 'Role',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => row.role?.name,
        },
        // {
        //     name: 'Verified ?',
        //     // center: true,
        //     minWidth: "80px",
        //     style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, paddingLeft: 50, justifyContent:'center' },
        //     cell: (row) => (row.is_verified ? <i className='fas fa-circle text-success'></i> : <i className='fas fa-circle text-danger'></i>)
        // },
        {
            name: 'Actions',
            width: "105px",
            center: true,
            cell: (row: any) => (
                <div className="input-group border m-auto text-center rounded-2 border-2 justify-content-center" style={{ width: 'max-content' }}>
                    {/* <Link to={`${row.user}/view`} style={{ zIndex: 0 }} className="btn btn-danger waves-effect input-group-text text-light btn-sm">
                    <i className="fas fa-trash-alt"></i>
                </Link> */}
                    <Link to={`${row.user_id}/edit`} style={{ zIndex: 0 }} className="btn btn-info waves-effect input-group-text btn-sm">
                        <i className="fw-normal fas fa-edit"></i>
                    </Link>
                    <button style={{ zIndex: 0 }} onClick={() => handleDelete(row.user_id)} className="btn btn-danger waves-effect input-group-text btn-sm">
                        <i className="fw-normal fas fa-trash-alt"></i>
                    </button>
                    {/* <td className="text-center">
                        <button type="button"
                            className="btn btn-primary btn-sm waves-effect waves-light"
                            id="sa-warning">Click me</button>
                    </td> */}
                </div>
            ),
        },
    ];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">User</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li className="breadcrumb-item active">User</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <h5 className="card-title"> User<span className="text-muted fw-normal ms-2">(510)</span></h5>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                        {/* <div>
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link active" href="apps-contacts-list.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="List" data-bs-original-title="List"><i className="bx bx-list-ul"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="apps-contacts-grid.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Grid" data-bs-original-title="Grid"><i className="bx bx-grid-alt"></i></a>
                                </li>
                            </ul>
                        </div> */}
                        <div>
                            <button onClick={openModal} className="btn btn-light"><i className="bx bx-plus me-1"></i> Add New</button>
                        </div>
                        <div className="dropdown">
                            <a className="btn btn-link text-muted py-1 font-size-16 shadow-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bx bx-dots-horizontal-rounded"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <CustomDataTable dataRows={smsUsers} dataColumns={dataColumns} paginationTotalRows={10} onRowClicked={handleRowClick} />
            {/* SmsUserView */}
            <BsModal showModal={showView}>
                <SmsUserView userId={userId} />
            </BsModal>

            {/* SmsUserForm */}
            <BsModal showModal={showAdd}>
                <SmsUserForm close={closeModal} />
            </BsModal>
        </div>
    )
}

export default SmsUserPage;