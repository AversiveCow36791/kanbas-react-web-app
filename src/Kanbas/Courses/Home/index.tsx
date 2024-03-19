import ModuleList from "../Modules/List";
import Status from "../Status";


function Home() {
  return (
  <div>
      <div className="row flex-grow">
      <div className="col flex-grow"><ModuleList /></div>
      <div className="col-3"><Status/></div>
      </div>
    </div>
  );
}
export default Home;