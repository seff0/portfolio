import React from "react";

function About() {
	return (
		<main className="container">
			<section className="row">
				<div className="col-lg-8">
					<h1>About Me</h1>
				</div>
			</section>
			<section className="row">
				<div className="col-lg-8">
					<img src="../../images/compressed.jpg" alt="Seth Hill" />
					<p>
						My name is Seth Hill, aspiring full stack developer from Sterling,
						CO. I've been working in transportation/delivery services for a few
						years now and I'm ready to transition to a career in a field I feel
						passionate about. I've always had a love for computers. I love to
						build and upgrade my systems as much as I love gaming on them.
					</p>
					<p>
						I'll be updating this page as my portfolio grows to showcase my most
						recent work!
					</p>
				</div>
			</section>
		</main>
	);
}

export default About;
