import React from "react";


const ListOfItems = () => {
	return (
       
     <ul class="list-group">
         <li class="list-group-item d-flex justify-content-between align-items-center">Shopping<span class="badge badge-pill bg-primary mr-3">$50</span></li>
         <li class="list-group-item d-flex justify-content-between align-items-center">Holiday<span class="badge bg-primary">$300</span></li>
         <li class="list-group-item d-flex justify-content-between align-items-center">Transportation<span class="badge bg-primary">$70</span></li>
         <li class="list-group-item d-flex justify-content-between align-items-center">Fuel<span class="badge bg-primary">$40</span></li>
         <li class="list-group-item d-flex justify-content-between align-items-center">ChildCare<span class="badge bg-primary">$500</span></li>
     </ul>
     
     
	);
};

 
   	
export default ListOfItems;