import { useRef, useState } from "react"

function UploadBox({ image, setImage }) {

  const fileInput = useRef(null)
  const [dragActive,setDragActive] = useState(false)

  const handleFile = (file) => {
    if(file){
      setImage({
        file,
        url:URL.createObjectURL(file)
      })
    }
  }

  const handleChange = (e)=>{
    handleFile(e.target.files[0])
  }

  const handleDrop = (e)=>{
    e.preventDefault()
    setDragActive(false)
    handleFile(e.dataTransfer.files[0])
  }

  return (
    <div
      className={`upload-box ${dragActive ? "drag" : ""}`}
      onDragOver={(e)=>{
        e.preventDefault()
        setDragActive(true)
      }}
      onDragLeave={()=>setDragActive(false)}
      onDrop={handleDrop}
    >

      <input
        ref={fileInput}
        type="file"
        accept="image/png,image/jpeg"
        hidden
        onChange={handleChange}
      />

      <p className="upload-text">
        Drag & Drop Diagram Here
      </p>

      <button
        className="upload-btn"
        onClick={()=>fileInput.current.click()}
      >
        Upload Image
      </button>

      {image && (
        <div className="preview">
          <p>{image.file.name}</p>
          <img src={image.url} alt="preview"/>
        </div>
      )}

    </div>
  )
}

export default UploadBox