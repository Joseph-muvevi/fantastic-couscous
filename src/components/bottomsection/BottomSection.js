import React from 'react';
import "./BottomSection.css";
import { bottomSection } from "../../utils/data/bottomSection";

const BottomSection = () => {
	return (
		<div className="bottom-section">
		   	{
				bottomSection.map((el, i) => (
					<p key={i} className="bottom-p">
						{el}
					</p>
				))
			}
		</div>
	)
}

export default BottomSection
