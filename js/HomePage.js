window.addEventListener('DOMContentLoaded',(event)=>{
  createInnerHtml();
});

const createInnerHtml = () => {
  const innerHtml = `
  <tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
 </tr>
 
  <tr>
    <td><img class="profile" alt="" src="../Assests/Profile_1.png"  width="30px"></img></td>
        <td>Pawan Kumar</td>
        <td>Male</td>
        <td><div class="dept-label">HR</div>
        <div class="dept-label">Finance</div></td>
        <td>150000</td>
        <td>1 Nov 2021</td>
        <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../Assests/delete icon.png" width="25px">
        <img id="2" onclick="update(this)" alt="Update" src="../Assests/update icon.png" width="25px">
          </td>
  </tr> `
;
document.querySelector('#table-display').innerHTML=innerHtml;
};
