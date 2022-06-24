import React from 'react';
import WhatsHot from '../Components/WhatsHot/WhatsHot';
import SelectClothesByGender from '../Components/SelectClothesByGenderDisplay/SelectClothesByGenderDisplay';
import ShopJewelryDisplay from '../Components/ShopJewelry/ShopJewelryDisplay';
import ShopElectronicsDisplay from '../Components/ShopElectronics/ShopElectronicsDisplay';

function Dashboard(props) {
	return (
		<div>
			<WhatsHot />
			<SelectClothesByGender />
			<ShopJewelryDisplay />
			<ShopElectronicsDisplay />
		</div>
	);
}

export default Dashboard;
