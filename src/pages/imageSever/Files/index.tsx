import React, { FC, ReactElement, useEffect, useState } from 'react'
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

type FileExplorer = {

}

const ImageFileSystem: FC<FileExplorer> = (): ReactElement => {
  const [showAdd, setShowAdd] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { smsUsers } = useSelector<any, any>(state => state.smsUser);

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
      cell: (row) => (
        <>
          <img src="/assets/images/users/avatar-1.jpg" height={30} width={30} className="img-fluid m-2 rounded float-start d-block" />
          {row.first_name}
        </>
      )

    },
    {
      name: 'Size',
      minWidth: "70px",
      style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5 },
      selector: (row: any) => row.mobile,
    },
    {
      name: 'Modified',
      minWidth: "70px",
      style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
      selector: (row: any) => row.email,
    },
    {
      name: 'Actions',
      minWidth: "70px",
      style: { fontWeight: "500", FontFace: "Poppins", marginLeft: 5, justifyContent: 'center' },
      selector: (row: any) => row.email,
    },


    {
      name: 'Actions',
      width: "105px",
      center: true,
      cell: (row: any) => (
        <div className="input-group border m-auto text-center rounded-2 border-2 justify-content-center" style={{ width: 'max-content' }}>

          <button style={{ zIndex: 0 }} onClick={() => handleDelete(row.user_id)} className="btn btn-danger waves-effect input-group-text btn-sm">
            <i className="fw-normal fas fa-trash-alt"></i>
          </button>

        </div>
      ),
    },
  ];


  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
  }


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
              <input
                type="file" id="file" name="file" multiple onChange={handleFileChange} />
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

      <CustomDataTable dataRows={smsUsers} dataColumns={dataColumns} paginationTotalRows={10} />

      <BsModal showModal={showAdd}>
        <SmsUserForm close={closeModal} />
      </BsModal>
    </div>
  )
}


export default ImageFileSystem; 