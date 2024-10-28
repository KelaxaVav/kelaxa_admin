import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TableColumn } from 'react-data-table-component'
import { toast } from 'react-toastify'
import { getSmsUsers } from '../../redux/slices/smsUserSlice'
import Http from '../../tools/Http'
import CustomDataTable from '../../components/CustomDataTable'
import BsModal from '../../components/BsModal'
import LeaveForm from '../../components/LeaveForm'
import './styles.css';

type SmsUserPageProps = {

}

const SmsUserPage: FC<SmsUserPageProps> = (): ReactElement => {
    const [showAdd, setShowAdd] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    // const { leaves } = useSelector<any, any>(state => state.smsUser);

    const leaves = [
        {
            first_name: "kopana",
            employee_type: "permanent",
            leave_request: "Days",
            dates_of_absence: " 10.08.2024-15.08.2024",
            type_of_leave: "Vacation",
            reason_for_the_leave_request: "hefhgtlju;p",
            status: "Reject"
        },
        {
            first_name: "kopana",
            employee_type: "permanent",
            leave_request: "2hours",
            dates_of_absence: " 16.08.2024",
            type_of_leave: "Personal Leave",
            reason_for_the_leave_request: "hefhgtlju;p",
            status: "Conform"
        }
    ]

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
        navigate("/sms/user");
    }



    const dataColumns: TableColumn<any>[] = [
        {
            name: 'Name',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5 },
            selector: (row: any) => row.first_name,
        },
        {
            name: 'Employee Type',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5 },
            selector: (row: any) => row.employee_type,
        },
        {
            name: 'Leave Request',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => row.leave_request,
        },
        {
            name: 'Dates of absence',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => row.dates_of_absence,
        },
        {
            name: 'Type of leave',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => row.type_of_leave,
        },
        {
            name: 'Reason for the leave request',
            minWidth: "150px",
            style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => row.reason_for_the_leave_request,
        },
        {
            name: 'Status',
            minWidth: "150px",
            selector: (row: any) => row.status,
            cell: (row: any) => {
                const statusClass = row.status === 'Reject' ? 'status-reject' : row.status === 'Conform' ? 'status-conform' : 'status-default';
                return <div className={`status-cell ${statusClass}`}>{row.status}</div>;
            }
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

            <CustomDataTable dataRows={leaves} dataColumns={dataColumns} paginationTotalRows={10} />
            {/* <Outlet /> */}
            <BsModal showModal={showAdd}>
                <LeaveForm close={closeModal} />
            </BsModal>
        </div>
    )
}

export default SmsUserPage;