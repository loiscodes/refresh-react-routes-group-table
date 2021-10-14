import groupTableData from "../mockData/group_table";
const getGroupDetails = (id) =>
  Promise.resolve(groupTableData.find((group) => group.groupId === id));

export default getGroupDetails;
