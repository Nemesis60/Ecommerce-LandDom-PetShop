
const imgSlider = [
    { id: 1, item: require('../Images/slider-1.png') },
    { id: 2, item: require('../Images/slider-2.png') },
    { id: 3, item: require('../Images/slider-3.png') },
]

function Slider() {

    return (
        <div className='slider width'>
            {imgSlider.map((item) =>
                <div key={item.id} className="slider-container">
                    <img className='slider__img' src={item.item} />
                </div>
            )}
        </div>
    )
}

export default Slider
