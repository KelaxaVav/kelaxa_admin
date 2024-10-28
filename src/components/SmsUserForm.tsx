import { ChangeEvent, EventHandler, FC, FormEvent, Fragment, ReactElement, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Http from '../tools/Http';
import { toast } from 'react-toastify';
import { imageChangeHandler, onChangeHandler } from '../services/common';
import { getRoles } from '../redux/slices/roleSlice';
import { getSmsUser, getSmsUsers } from '../redux/slices/smsUserSlice';

type SmsUserFormProps = {
    close: EventHandler<any>;
}

const SmsUserForm: FC<SmsUserFormProps> = ({ close }): ReactElement => {
    const initialData = {
    };

    const [data, setData] = useState<any>(initialData);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();

    console.log(data);

    const { roles } = useSelector<any, any>(state => state.role);
    const { smsUser } = useSelector<any, any>(state => state.smsUser);

    useEffect(() => {
        Http.get("/role").then(response => {
            dispatch(getRoles(response.data));
        });
    }, [])

    useEffect(() => {
        if (params.user_id) {
            setIsEdit(true);
            Http.get(`/user/${params.user_id}`).then(response => {
                console.log(response);
                dispatch(getSmsUser(response.data));
            }).catch(error => {
                if (error.error.statusCode == 404) {
                    console.log(error.error);
                }
                toast.error(error.meta.message);
                close(null);
            });
        }
    }, [params.user_id]);

    useEffect(() => {
        if (isEdit && smsUser) {
            const { first_name, last_name, email, mobile } = smsUser;
            setData({
                first_name,
                last_name,
                email,
                mobile,
            });
        }
    }, [smsUser]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.currentTarget;
        form.classList.add('was-validated')
        if (!form.checkValidity()) {
            return;
        }

        const formData = {
            first_name: data.first_name,
            last_name: data.last_name,
            mobile: data.mobile,
            email: data.email,
            role_id: data.role_id
        }

        let submission;
        if (isEdit) {
            submission = Http.put(`/user/${params.user_id}`, formData)
        }
        else {
            submission = Http.post("/user", formData)
        }
        submission.then(response => {
            Http.post('/user', data).then(response => {
                // dispatch(getCustomer(response.data));
            })
            toast.success(response.data.meta.message);
            setData(initialData);
            close(e);
        }).catch(error => {
            console.log(error);
            toast.error(error.meta.message);
        })
    }

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        onChangeHandler(e, setData);
    }

    function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
        imageChangeHandler(e, setData);
    }


    return (
        <Fragment>
            <form className="needs-validation" onSubmit={handleSubmit} noValidate style={{ display: "contents" }}>
                <div className="modal-header">
                    <h5 className="modal-title" id="productModalTitle">{isEdit ? 'Edit' : 'Add'} User</h5>

                    <button title='closeModal' type="button" className="btn-close" onClick={close}></button>
                </div>
                <div className="modal-body bg-light fw-bold">
                    <div className="row">

                        <div className="col-md-12">
                            <label htmlFor="first_name" className="form-label mb-1 mt-2">First Name</label>
                            <input type="text" className="form-control form-control-sm" name="first_name" id="first_name" placeholder='Enter first name'
                                value={data.first_name} onChange={(e) => setData({ ...data, first_name: e.target.value })}
                                required
                            />
                            <div className="invalid-feedback">Enter first name.</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="last_name" className="form-label mb-1 mt-2">Last Name</label>
                            <input type="text" className="form-control form-control-sm" name="last_name" id="Last_name" placeholder='Enter last name'
                                value={data.last_name} onChange={(e) => setData({ ...data, last_name: e.target.value })}
                                required
                            />
                            <div className="invalid-feedback">Enter last name.</div>
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="mobile" className="form-label mb-1 mt-2">Mobile Number</label>
                            <input type="text" className="form-control form-control-sm" name="mobile" id="mobile" placeholder='Enter mobile'
                                value={data.mobile}
                                onChange={handleChange} required />
                            <div className="invalid-feedback">Enter mobile number.</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label mb-1 mt-2">E-Mail Address</label>
                            <input type="text" className="form-control form-control-sm" name="email" id="email" placeholder='Enter email address'
                                value={data.email}
                                onChange={handleChange} required />
                            <div className="invalid-feedback">Enter email address.</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="mask" className="form-label mb-1 mt-2">Mask</label>
                            <input type="text" className="form-control form-control-sm" name="mask" id="mask" placeholder='Enter mask'
                                value={data.mask}
                                onChange={handleChange} required />
                            <div className="invalid-feedback">Enter mask.</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="role_id" className="form-label mb-1 mt-2">Role</label>
                            <select className="form-select form-select-sm" name="role_id" id="role_id"
                                value={data.role_id}
                                onChange={handleChange} required >
                                <option value="">Choose Role</option>
                                {roles.map((role: any) => <option key={role.id} value={role.role_id}>{role.name}</option>)}
                            </select>
                            <div className="invalid-feedback">Select Role.</div>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-sm btn-secondary fw-bold" onClick={close} type="reset">Close</button>
                    <button className="btn btn-sm btn-warning fw-bold" type="submit">Save</button>
                </div>
            </form>
        </Fragment>
    )
}

export default SmsUserForm;