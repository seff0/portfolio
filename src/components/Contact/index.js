import React from "react";

function Contact() {
	return (
		<main className="container">
			<section className="row">
				<div className="col-lg-8">
					<h1>Contact</h1>
				</div>
			</section>
			<section className="row">
				<div className="col-lg-8">
					<form>
						<div className="mb-3">
							<label for="exampleFormControlInput1" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="exampleFormControlInput1"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlInput1" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput2"
								placeholder="name@example.com"
							/>
						</div>
						<div className="mb-3">
							<label for="exampleFormControlTextarea1" className="form-label">
								Message
							</label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="4"></textarea>
						</div>
						<button type="submit" className="btn btn-secondary">
							Submit
						</button>
					</form>
				</div>
			</section>
			<br />
			<br />
			<section className="row">
				<form method="get" action="assets/seth.hill.resume.2021.pdf">
					<button type="submit" className="btn btn-secondary">
						Check out my resume!
					</button>
				</form>
				<br />
				<h2>Find me here!</h2>
				<br />
				<a
					href="https://github.com/seff0"
					className="personal-link"
					target="_blank">
					github.com/seff0
				</a>
				<br />
				<a
					href="https://www.linkedin.com/in/hillseth/"
					className="personal-link"
					target="_blank">
					linkedin.com/in/hillseth
				</a>
			</section>
		</main>
	);
}

export default Contact;
