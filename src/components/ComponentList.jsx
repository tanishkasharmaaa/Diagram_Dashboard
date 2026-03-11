function ComponentList({ components, selected, setSelected }) {
console.log(selected)
  return (
    <div className="card component-list">

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