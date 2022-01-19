import React from 'react'
import { paragraph } from "../../utils/data/paragraph"

const Content = () => {

	const paragraphLeft = paragraph.slice(0, 5)
	const paragraphRight = paragraph.slice(5, 8)

	return (
		<div className="content">
			<div className="content-content">
				<div className="content-left">
					{
						paragraphLeft &&
						paragraphLeft.map((p, i) => (
							<p key={i} className="content-paragraphs">
								{p}
							</p>
						))
					}
				</div>
				<div className="content-right">
				{
						paragraphRight &&
						paragraphRight.map((p, i) => (
							<p key={i} className="content-paragraphs">
								{p}
							</p>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Content
