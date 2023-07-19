import axios from "axios";
import React from "react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const baseURL = "https://sandbox.ixaya.net/api/products?X-API-KEY=kkkcc4o4gsko8w0wg084k4o8s4wggwcosk8okgw4";


const Service = () => {
  const [post, setPost] = React.useState();
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost (response.data.response);
    });
  }, []);

  console.log(post)

}
export default Service;
