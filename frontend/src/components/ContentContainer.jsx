import React from "react";

const ContentContainer = (props) => {
	return (
		<div className={`md:mx-16 xl:mx-60 my-12 ${props.className}`}>
			{props.children}
		</div>
	);
};

export default ContentContainer;
