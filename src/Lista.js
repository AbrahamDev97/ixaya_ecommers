import axios from "axios";
import React from "react";
import{ useState} from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { AgGridReact } from 'ag-grid-react';

const baseURL = "https://sandbox.ixaya.net/api/products?X-API-KEY=kkkcc4o4gsko8w0wg084k4o8s4wggwcosk8okgw4";


const App = () => {
  const [post, setPost] = React.useState();
  const [columnDefs,setColumnDefs] = useState([
    { field: 'id' },
    { field: 'category' },
    { field: 'title' },
    { field: 'short_description' },
    { field: 'description' },
    { field: 'sale_count' },
    { field: 'discount' },
    { field: 'price' },
    { field: 'enabled' },
    { field: 'image_url' },
    { field: 'create_date' },
    { field: 'last_update' }
]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost (response.data.response);
    });
  }, []);

  console.log(post)

  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 1200}}>
    <AgGridReact 
        rowData={post}
        columnDefs={columnDefs}
        >
          
    </AgGridReact>
</div>
  );
}
export default App;
