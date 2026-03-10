function ComponentList({ components, selected, setSelected }) {

  return (
    <div className="card">

      <h3>Circuit Components</h3>

      {components.map((comp) => (

        <div
          key={comp.id}
          onClick={() => setSelected(comp.id)}
          className={`component ${selected === comp.id ? "active" : ""}`}
        >
          {comp.name}
        </div>

      ))}

    </div>
  )
}

export default ComponentList