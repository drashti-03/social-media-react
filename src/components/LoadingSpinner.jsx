const LoadingSpinner = () => {
  return (
    <div>
      <div className="d-flex justify-content-center m-5">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "8rem", height: "8rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
