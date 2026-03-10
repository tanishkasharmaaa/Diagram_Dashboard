import {
  TransformWrapper,
  TransformComponent
} from "react-zoom-pan-pinch"

function DiagramViewer({ image }) {

  return (
    <div className="card">

      {image ? (
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (

            <>
              <div className="viewer-controls">

                <button
                  className="zoom-btn"
                  onClick={() => zoomIn()}
                >
                 + Zoom In
                </button>

                <button
                  className="zoom-btn"
                  
                  onClick={() => zoomOut()}
                >
                  - Zoom Out
                </button>

                <button
                  className="zoom-reset"
                  onClick={() => resetTransform()}
                >
                  Reset
                </button>

              </div>

              <div className="diagram-container">

                <TransformComponent>
                  <img
                    src={image.url}
                    alt="diagram"
                    className="diagram-img"
                  />
                </TransformComponent>

              </div>

            </>
          )}
        </TransformWrapper>
      ) : (
        <p>No diagram uploaded</p>
      )}

    </div>
  )
}

export default DiagramViewer