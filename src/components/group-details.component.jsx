import { useState, useEffect } from "react";
import { useParams } from "react-router";
import getGroupDetails from "../util/fakeApiCall";
import { Link } from "react-router-dom";

function GroupDetailsComponent(props) {
  const { groupId } = useParams();
  const [groupDetails, setGroupDetails] = useState({
    email: "",
    groupName: "",
    phone: "",
    address: "",
    contactFirstName: "",
    contactLastName: "",
    city: "",
    state: "",
  });
  const onChangeInputHandler = () => (event) => {
    const target = event.target;
    const { name, value } = target;
    setGroupDetails({
      ...groupDetails,
      [name]: value,
    });
  };
  useEffect(() => {
    const getGroupDetailsAsync = async () => {
      const id = Number(groupId);
      const results = await getGroupDetails(id);
      setGroupDetails({ ...results });
    };
    getGroupDetailsAsync();
  }, [groupId]);

  return (
    <div className="Details">
      <form>
        <div>
          <label htmlFor="groupName">Group Name:</label>
          <input
            id="groupName"
            name="groupName"
            value={groupDetails.groupName}
            type="text"
            onChange={onChangeInputHandler()}
          />
        </div>
        <div>
          <label htmlFor="contactFirstName">Contact First Name:</label>
          <input
            id="contactFirstName"
            name="contactFirstName"
            value={groupDetails.contactFirstName}
            type="text"
            onChange={onChangeInputHandler()}
          />
        </div>
        <div>
          <label htmlFor="contactLastName">Contact Last Name:</label>
          <input
            id="contactLastName"
            name="contactLastName"
            value={groupDetails.contactLastName}
            type="text"
            onChange={onChangeInputHandler()}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={groupDetails.email}
            type="email"
            onChange={onChangeInputHandler()}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            name="phone"
            value={groupDetails.phone}
            type="phone"
            onChange={onChangeInputHandler()}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            name="address"
            value={groupDetails.address}
            type="text"
            onChange={onChangeInputHandler()}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            value={groupDetails.city}
            type="text"
            onChange={onChangeInputHandler()}
          />
          <label htmlFor="state">State:</label>
          <input
            id="state"
            name="state"
            value={groupDetails.state}
            type="text"
            onChange={onChangeInputHandler()}
          />
        </div>
      </form>
      <Link to={``}>
        <button type="button">Back</button>
      </Link>
    </div>
  );
}

export default GroupDetailsComponent;
