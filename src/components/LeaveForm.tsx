import React, { ChangeEvent, EventHandler, FC, FormEvent, Fragment, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Http from '../tools/Http';
import { toast } from 'react-toastify';
import { imageChangeHandler, onChangeHandler } from '../services/common';
import { getRoles } from '../redux/slices/roleSlice';
import { getSmsUser } from '../redux/slices/smsUserSlice';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

type SmsUserFormProps = {
    close: EventHandler<any>;
}

const SmsUserForm: FC<SmsUserFormProps> = ({ close }): ReactElement => {

    const initialData = {
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        mask: '',
        role_id: '',
        employeeTypes: { Permanent: false, Internship: false },
        leaveRequest: { Days: false, Hours: false },
        dateFrom: '',
        dateTo: '',
        payment_type: '',
        reason: ''
    };

    const leave_types = [
        { label: "Vacation", value: "VACATION" },
        { label: "Personal Leave", value: "PERSONAL" },
        { label: "Bereavement", value: "BEREAVEMENT" },
        { label: "Sick-Medical Leave", value: "MEDICAL" },
        { label: "Family Reasons", value: "FAMILY" },
        { label: "Leave without pay", value: "WITHOUT_PAY" },
        { label: "Jury Duty", value: "JURY_DUTY" },
        { label: "To Vote", value: "VOTE" },
    ];

    const [data, setData] = useState<any>(initialData);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();

    const { roles } = useSelector<any, any>(state => state.role);
    const { smsUser } = useSelector<any, any>(state => state.smsUser);

    const { control, handleSubmit, setValue, watch } = useForm();

    useEffect(() => {
        Http.get("/role").then(response => {
            dispatch(getRoles(response.data));
        });
    }, [dispatch]);

    useEffect(() => {
        if (params.user_id) {
            setIsEdit(true);
            Http.get(`/user/${params.user_id}`).then(response => {
                dispatch(getSmsUser(response.data));
            }).catch(error => {
                if (error.error.statusCode === 404) {
                    console.log(error.error);
                }
                toast.error(error.meta.message);
                close(null);
            });
        }
    }, [params.user_id, dispatch, close]);

    useEffect(() => {
        if (isEdit && smsUser) {
            const { first_name, last_name, email, mobile, mask, role_id, employeeTypes, leaveRequest, dateFrom, dateTo, Leave_type, reason } = smsUser;
            setData({
                first_name,
                last_name,
                email,
                mobile,
                mask,
                role_id,
                employeeTypes,
                leaveRequest,
                dateFrom,
                dateTo,
                Leave_type,
                reason
            });
            setValue("Leave_type", Leave_type);
        }
    }, [smsUser, isEdit, setValue]);

    const onSubmit = (formData: any) => {
        const submissionData = {
            ...data,
            ...formData
        };

        let submission;
        if (isEdit) {
            submission = Http.put(`/user/${params.user_id}`, submissionData);
        } else {
            submission = Http.post("/user", submissionData);
        }
        submission.then(response => {
            toast.success(response.data.meta.message);
            setData(initialData);
            close(null);
        }).catch(error => {
            console.log(error);
            toast.error(error.meta.message);
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onChangeHandler(e, setData);
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setData(prevData => ({
            ...prevData,
            employeeTypes: {
                ...prevData.employeeTypes,
                [name]: checked
            },
            leaveRequest: {
                ...prevData.leaveRequest,
                [name]: checked
            }
        }));
    };

    return (
        <Fragment>
            <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "contents" }}>
                <div className="modal-header">
                    <h5 className="modal-title" id="productModalTitle">{isEdit ? 'Edit' : 'Add'} User</h5>
                    <button title='closeModal' type="button" className="btn-close" onClick={() => close(null)}></button>
                </div>
                <div className="modal-body bg-light fw-bold">
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="first_name" className="form-label mb-1 mt-2">First Name</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                name="first_name"
                                id="first_name"
                                placeholder='Enter first name'
                                value={data.first_name}
                                onChange={(e) => setData({ ...data, first_name: e.target.value })}
                                required
                            />
                            <div className="invalid-feedback">Enter first name.</div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="employeeType" className="form-label mb-1 mt-2">Employee Type</label>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        type="checkbox"
                                        name="Permanent"
                                        id="Permanent"
                                        checked={data.employeeTypes.Permanent}
                                        onChange={handleCheckboxChange}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="Permanent" className="form-check-label" style={{ fontSize: 10 }}>Permanent Staff</label>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="checkbox"
                                        name="Internship"
                                        id="Internship"
                                        checked={data.employeeTypes.Internship}
                                        onChange={handleCheckboxChange}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="Internship" className="form-check-label" style={{ fontSize: 10 }}>Internship</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="leaveRequest" className="form-label mb-1 mt-2">Leave Request</label>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        type="checkbox"
                                        name="Days"
                                        id="Days"
                                        checked={data.leaveRequest.Days}
                                        onChange={handleCheckboxChange}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="Days" className="form-check-label" style={{ fontSize: 10 }}>Days</label>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="checkbox"
                                        name="Hours"
                                        id="Hours"
                                        checked={data.leaveRequest.Hours}
                                        onChange={handleCheckboxChange}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="Hours" className="form-check-label" style={{ fontSize: 10 }}>Hours</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="datesOfAbsence" className="form-label mb-1 mt-2">Dates of Absence</label>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        name="dateFrom"
                                        id="dateFrom"
                                        placeholder="Enter From"
                                        value={data.dateFrom}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Enter From.</div>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        name="dateTo"
                                        id="dateTo"
                                        placeholder="Enter To"
                                        value={data.dateTo}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Enter To.</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="Leave_type" className="form-label mb-1 mt-2">Type of Leave</label>
                            <Controller
                                name="Leave_type"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        className="shadow-custom"
                                        options={leave_types}
                                        value={leave_types.find(
                                            (option) => option.value === field.value
                                        )}
                                        onChange={(selectedOption) => {
                                            setValue("Leave_type", selectedOption ? selectedOption.value : '');
                                        }}
                                    />
                                )}
                            />
                            <div className="invalid-feedback" style={{ fontSize: 10 }}>Select a Leave Type.</div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="reason" className="form-label mb-1 mt-2">Reason for Leave Request</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                name="reason"
                                id="reason"
                                placeholder='Enter Reason for the Leave request'
                                value={data.reason}
                                onChange={(e) => setData({ ...data, reason: e.target.value })}
                                required
                            />
                            <div className="invalid-feedback">Enter reason for the leave request.</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="Status" className="form-label mb-1 mt-2">Status</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                name="Status"
                                id="Status"
                                placeholder='Enter Status'
                                value={data.Status}
                                onChange={(e) => setData({ ...data, Status: e.target.value })}
                                required
                            />
                            <div className="invalid-feedback">Enter Status.</div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <label htmlFor="Leave_type" className="form-label mb-1 mt-2">Status</label>
                    <div className='d-flex justify-content-sm-around'>
                        <button className="btn btn-sm btn-success fw-bold" onClick={() => close(null)} type="button">Conform</button>
                        <button className="btn btn-sm btn-danger fw-bold" type="submit">Reject</button>
                    </div>
                </div> */}




                <div className="modal-footer">
                    <button className="btn btn-sm btn-secondary fw-bold" onClick={() => close(null)} type="button">Close</button>
                    <button className="btn btn-sm btn-warning fw-bold" type="submit">Submit</button>
                </div>

            </form>
        </Fragment>
    );
}

export default SmsUserForm;
