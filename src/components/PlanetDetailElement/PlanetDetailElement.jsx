export const PlanetDetailElement = ({ children, data }) => {
  return (
    <>
      <div className="detail-element">
        <p className="upper-case detail-element-header">{children}</p>
        <h2 className="antonio upper-case detail-element-data">{data}</h2>
      </div>
    </>
  );
};
