// <!-- Section2: UC-3 - Use of template literals-->

window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml =
    `<tr>
        <th>Fullname</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Pin Code</th>
        <th>Phone Number</th>
        <th>Actions</th>
        </tr>`;

        const innerHtml = `${headerHtml}
        <tr>
            <td>Raj Kawale</td>
            <td> At sai colony, 7th st.  </td>
            <td> Nagpur </td>
            <td> Maharashtra </td>
            <td> 440 001 </td>
            <td> 91 9049331047 </td>
            <td>
            <img onclick="remove(this)" alt="delete"src="assets\delete-black-18dp.svg">
            <img onclick="update(this)" alt="edit" src="assets\create-black-18dp.svg"  >
            </td>
        </tr>
        
        <tr>
            <td> Sam Smith </td>
            <td> 5th st. Omega lane, LA </td>
            <td> Los Angeles </td>
            <td> California </td>
            <td> 900 001 </td>
            <td> 555 5551234 </td>
            <td>
            <img onclick="remove(this)" alt="delete"src="assets\delete-black-18dp.svg">
            <img onclick="update(this)" alt="edit" src="assets\create-black-18dp.svg"  >
            </td>
        </tr>

    </tr>`;
    document.querySelector('#table-display').innerHTML = innerHtml;
} 