import React from 'react';
import "./Main.css"
import { headerContent } from "../../utils/data/headerContent";

const Header = () => {
	return (
		<div className="header">
			<div className="header-content">
				<div className="header-content-left">
					<img 
						className="header-image"
						title="Jean Morlon Emmanuel"
						src={headerContent.image}
						alt={headerContent.alt}/>
				</div>
				<div className="header-content-right">
					<h3 className="header-title">
						{headerContent.header}
					</h3>
					<h4 className="header-sub-title">
						{headerContent.sub}
					</h4>
				</div>
			</div>
		</div>
	)
}

export default Header
