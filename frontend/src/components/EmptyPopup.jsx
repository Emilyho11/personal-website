import React from 'react'

const EmptyPopup = () => {
    return (
        <div className="lg:px-16 p-10 bg-dark_blue text-back_light_blue">
            <h3 className="text-2xl">Ohno! This music note does not contain a hobby.</h3>
            <h3 className="text-2xl">Unfortunately, your score has been reset to 0.</h3>
        </div>
    );
}

export default EmptyPopup