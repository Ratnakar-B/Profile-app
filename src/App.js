import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Info from "./components/Info";

function App() {
  // let inputRef = useRef();

  // let dispatch = useDispatch();

  // let storeObj = useSelector((store) => {
  //   return store;
  // });

  // let userInput = (inputRef) => {
  //   let res = inputRef.current.value;
  //   if (res == true) {
  //     console.log(`${inputRef.current.value}`);
  //   } else {
  //     console.log("err");
  //   }
  // };

  // let [data, setData] = useState([]);

  //Get Data from API//

  // let [data, setData] = useState([]);

  // let getDatafromSever = async () => {
  //   let reqOptions = {
  //     method: "GET",
  //   };

  //   let JSONData = await fetch("https://pokeapi.co/api/v2/pokemon", reqOptions);

  //   let JSOData = await JSONData.json();
  //   console.log(JSOData);
  //   setData(JSOData.results);
  // };

  return (
    <div className="App">
      <Info />
    </div>
  );
}

export default App;
