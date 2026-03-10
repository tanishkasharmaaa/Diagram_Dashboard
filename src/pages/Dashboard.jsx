import { useState, useEffect } from "react"
import UploadBox from "../components/UploadBox"
import DiagramViewer from "../components/DiagramViewer"
import ComponentList from "../components/ComponentList"
import { getComponents } from "../services/api"

function Dashboard() {

  const [image, setImage] = useState(null)
  const [components, setComponents] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const load = async () => {
      const data = await getComponents()
      setComponents(data)
    }

    load()
  }, [])

  return (
    <div className="dashboard">

      <UploadBox image={image} setImage={setImage} />

      <div className="dashboard-grid">

        <DiagramViewer
          image={image}
          selected={selected}
        />

        <ComponentList
          components={components}
          selected={selected}
          setSelected={setSelected}
        />

      </div>

    </div>
  )
}

export default Dashboard