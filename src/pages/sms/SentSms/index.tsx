import React, { FC, ReactElement, useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TableColumn, TableRow } from 'react-data-table-component'
import { toast } from 'react-toastify'
import Http from '../../../tools/Http'
import CustomDataTable from '../../../components/CustomDataTable'
import BsModal from '../../../components/BsModal'
import { getSentSmses } from '../../../redux/slices/sentSmsSlice'

type SentSmsPageProps = {

}

const SentSmsPage: FC<SentSmsPageProps> = (): ReactElement => {
    const [showAdd, setShowAdd] = useState(false);
    const [showView, setShowView] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const { sentSmses } = useSelector<any, any>(state => state.sentSms);

    const fetchAll = () => {
        if (!searchParams.get('size')) {
            searchParams.set('size', '10');
        }

        Http.get(`/sms?${searchParams.toString()}`).then(response => {
            dispatch(getSentSmses(response.data));
        });
    }

    useEffect(() => {
        if (location.pathname.includes("edit")) {
            openAddModal();
        }
        else if (location.pathname.includes("view")) {
            openViewModal();
        }
    }, [location.pathname]);

    useEffect(() => {
        fetchAll();
    }, [searchParams])


    const handleDelete = (service_provider_id: string) => {
        Http.delete(`/sms/${service_provider_id}`)
            .then(response => {
                fetchAll();
                toast.success(response.data.meta.message);
            })
            .catch(error => {
                console.log(error);
                toast.error(error.meta.message);
            });
    }

    const openAddModal = () => {
        setShowAdd(true);
    }

    const closeAddModal = () => {
        setShowAdd(false);
        navigate("/sms");
    }

    const openViewModal = () => {
        setShowView(true);
    }

    const closeViewModal = () => {
        setShowView(false);
        navigate("/sms");
    }

    // const handleAction = (sms_id: string) => {
    //     Http.delete(`/user/${sms_id}`)
    //         .then(response => {
    //             fetchAll();
    //             toast.success(response.data.meta.message);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             toast.error(error.meta.message);
    //         });
    // }


    const dataColumns: TableColumn<any>[] = [
        // {
        //     name: 'Name',
        //     minWidth: "70px",
        //     style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
        //     selector: (row: any) => row.data.sms_id,
        // },
        // {
        //     name: 'Title',
        //     minWidth: "70px",
        //     style: { fontWeight: "500", FontFace: "Poppins", justifyContent: 'center' },
        //     selector: (row: any) => row.service_provider.name,
        // },
        {
            name: 'Message',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", justifyContent: 'center' },
            selector: (row: any) => row.message,
        },
        {
            name: 'Date and time',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", justifyContent: 'center' },
            selector: (row: any) => row.created_at,
        },
        {
            name: 'Delivery Status',
            minWidth: "70px",
            style: { fontWeight: "500", FontFace: "Poppins", justifyContent: 'center' },
            selector: (row: any) => row.response_text,
        },
       
    ];

    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0 font-size-18">Sent SMS</h4>
                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                <li className="breadcrumb-item active">Sent SMS</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <h5 className="card-title">SMS <span className="text-muted fw-normal ms-2">(834)</span></h5>
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
                        {/* <div>
                            <button onClick={openAddModal} className="btn btn-light"><i className="bx bx-plus me-1"></i> Add New</button>
                        </div> */}
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
            <CustomDataTable dataRows={sentSmses} dataColumns={dataColumns} paginationTotalRows={10} />
            {/* <Outlet /> */}
            {/* <BsModal showModal={showAdd}>
                < close={closeAddModal} />
            </BsModal> */}
            {/* <BsModal showModal={showView}>
                <ConnectionView close={closeViewModal} />
            </BsModal> */}
        </div>
    )
}

export default SentSmsPage;