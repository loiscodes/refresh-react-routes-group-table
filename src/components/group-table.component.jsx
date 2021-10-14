import {useState, useEffect} from "react";
import groupTableData from "../mockData/group_table";
import { Link } from 'react-router-dom';

function GroupTableComponent() {
    const COLUMNS = ["GROUP ID", "Group Name", "Main Email", "Main Address", "Main Phone", "Actions"];
    const [groupData, setGroupData] = useState([]);
    useEffect(()=>{
        setGroupData(groupTableData);
    },[]);

    const onClickDeleteEventHandler = (id) => () => {
        let data = [...groupData];
        data.splice(id, 1);
        setGroupData(data);
    }
    return (
      <table className="Table">
<thead>
    <tr>
    {COLUMNS.map((column, index) => <th key={index}>
        {column}
    </th>)}
    </tr>
</thead>
<tbody>
    {groupData.map((row, index) => <tr key={index}>
        <td>{row.groupId}</td>
        <td>{row.groupName}</td>
        <td>{row.email}</td>
        <td>{row.address}</td>
        <td>{row.phone}</td>
        <td> <Link to={`/${row.groupId}`}>
     <button type="button">
          Edit
     </button>
 </Link> <button onClick={onClickDeleteEventHandler(index)}>Delete</button></td>
    </tr>)}
</tbody>
      </table>
    );
  }
  
  export default GroupTableComponent;