import { EventHandler, FC, ReactElement, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TableColumn } from 'react-data-table-component';
import { toast } from 'react-toastify';
import Http from '../tools/Http';
import { getSmsUser, getSmsUsers } from '../redux/slices/smsUserSlice';
import CustomDataTable from './CustomDataTable';
type SmsUserView = {
    close: EventHandler<any>;
}
const SmsUserView: FC = ({ userId }): ReactElement => {
    const [showAdd, setShowAdd] = useState(false);
    const [showView, setShowView] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [smsUser, setSmsUser] = useState(null);
    const navigate = useNavigate();
    // const { smsUsers } = useSelector((state: any) => state.smsUser);
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    console.log({ 'isrid': userId });


    const fetchAll = () => {
        Http.get(`/user/${userId}`)
            .then(response => {
                const monthlySmses = response.data.data.monthlySmses || [];
                console.log({ 'response': monthlySmses });
                setSmsUser(monthlySmses);
            })
            .catch(error => {
                console.error('Error fetching SMS data:', error);
                toast.error('Failed to fetch SMS data');
                setSmsUser([]);
            });
    }


    useEffect(() => {
        fetchAll();
    }, [userId])

    const closeModal = () => {
        setShowAdd(false);
        setSelectedUser(null);
        navigate("/sms/user");
    };

    const handleRowClick = (row, e) => {
        setSelectedUser(row);
        setShowView(true);
    };

    const dataColumns: TableColumn<any>[] = [

        {
            name: 'Date',
            minWidth: "70px",
            style: { fontWeight: "500", fontFamily: "Poppins", marginLeft: 5 },
            selector: (row: any) => row.month,
        },
        {
            name: 'Total sms',
            minWidth: "70px",
            style: { fontWeight: "500", fontFamily: "Poppins", marginLeft: 5 },
            selector: (row: any) => row.total,
        },
        {
            name: 'success Sms',
            minWidth: "70px",
            style: { fontWeight: "500", fontFamily: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => row.succeeded,
        },
        {
            name: 'Failed Sms',
            minWidth: "70px",
            style: { fontWeight: "500", fontFamily: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => (row.total - row.succeeded),
        },
        {
            name: 'Total Amount',
            minWidth: "70px",
            style: { fontWeight: "500", fontFamily: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => (row.amount),
        },
        {
            name: 'Status',
            minWidth: "70px",
            style: { fontWeight: "500", fontFamily: "Poppins", marginLeft: 5, justifyContent: 'center' },
            selector: (row: any) => row.Status,
        },

    ];

    return (
        <div className="container-fluid">

            <div className="row align-items-center mb-3">
                <div className="col-md-6">
                    <h5 className="card-title">Sms</h5>
                </div>
                <div className="col-md-6 text-end">
                    <button title='closeModal' type="button" className="btn-close" onClick={close}></button>
                </div>
            </div>
            <CustomDataTable dataRows={smsUser || []} dataColumns={dataColumns} paginationTotalRows={10} onRowClicked={handleRowClick} />

            {/* Modal Section */}
            {showAdd && (
                <div className="modal show d-block" tabIndex={-1} role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">


                            <div className="modal-footer">
                                <button className="btn btn-sm btn-secondary fw-bold" onClick={closeModal} type="button">Close</button>
                                <button className="btn btn-sm btn-warning fw-bold" type="submit">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SmsUserView;
