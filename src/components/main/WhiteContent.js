import React from 'react';
import "./Main.css";
import { personalInfo } from "../../utils/data/personalInfo";

const WhiteContent = () => {
	const infoKeys = Object.keys(personalInfo.informationInfo)
	const infoValues = Object.values(personalInfo.informationInfo)

	const unitArrays = personalInfo.rightInfo


	console.log(unitArrays)
	
	

	return (
		<div className="white-content">
			{/* <div className="start-circle"> </div> */}
			<div className="white-content-content">
				<div className="white-content-left">
					<h4 className="white-content-header">
						Information Personelle
					</h4>
					<div className="white-content-info">
						<div className="white-content-info-row">
							<div className="white-content-info-column">
								{
									infoKeys.map((p, i) => (
										<p key ={i} className="white-content-p">
											{p}
										</p>
										
									))
								}
							</div>

							<div className="white-content-info-column">
								{
									infoValues.map((p, i) => (
										<p key={i} className="white-content-p">
											:  {p}
										</p>
									))
								}
							</div>
						</div>
					</div>
				</div>
				<div className="white-content-right">
					<div className="white-content-right-unit">
					   {
						   unitArrays.map((item, index) => (
							   <div key={index} className="white-content-right-section">
									<h4 className="white-content-header">
										{item.header}
									</h4>
								
									<div className="white-content-right-row">
										{
											item.section.map((keys, index) => (
												<p key={index} className="white-content-p">
													{Object.keys(keys)}
												</p> 
											))
										}
										
										<p className="white-content-p">

										</p> 
									</div>
							   </div>
						   ))
					   }
					</div>
				</div>
			</div>
			<div className="end-circle"></div>
		</div>
	)
}

export default WhiteContent
