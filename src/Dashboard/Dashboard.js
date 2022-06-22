import React from 'react';
import WhatsHot from '../Components/WhatsHot/WhatsHot';
import SelectClothesByGender from '../Components/SelectClothesByGender/SelectClothesByGender';

function Dashboard(props) {
    return (
			<div>
				<WhatsHot />
				<SelectClothesByGender />
			</div>
		);
}

export default Dashboard;