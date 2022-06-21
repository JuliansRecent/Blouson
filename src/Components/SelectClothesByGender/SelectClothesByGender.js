import './SelectClothesByGender.css'

function SelectClothesByGender(props) {
    return (
			<div className='mens-and-womens-container'>
				<div className='mens-image-container'>
					<button className='shop-mens'>Shop Men's</button>
				</div>

				<div className='womens-image-container'>
					<button className='shop-womens'>Shop Women's</button>
				</div>
			</div>
		);
}

export default SelectClothesByGender;