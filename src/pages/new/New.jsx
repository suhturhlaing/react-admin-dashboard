import "./new.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {useState } from "react";

function New( {inputs, title}) {

  const [file, setFile ] = useState("");
  // console.log("file", file);
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file" id="file" onChange={e => setFile(e.target.files[0])} style={{display : "none"}}/>
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
              </div>
              ))
              }

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default New
