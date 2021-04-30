import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
            <>
            
    <section className="w3l-footers-20">
	<div className="footers20">
		<div className="container">
			<div className="footers20-content">
				<div className="row grid-col-4 grids-content">
					<div className="column col-lg-3 col-md-6 col-sm-6">
						<h4>Address</h4>
						<p className="contact-para3 para">Pretoria, Soshanguve via philip</p>
					</div>
					<div className="column col-lg-3 col-md-6 col-sm-6">
						<h4>Email</h4>
						<a href="abelmasingita9@gmail.com">
							<p className="contact-mail para">info@abelmasingita.com</p>
						</a>
					</div>
					<div className="column col-lg-3 col-md-6 col-sm-6">
						<h4>Phone 1</h4>
						<a href="tel:+27 74 226 1505">
							<p className="contact-phone para">+27 74 226 1505</p>
						</a>
					</div>
					<div className="column col-lg-3 col-md-6 col-sm-6">
						<h4>Phone 2</h4>
						<a href="tel:+27 74 226 1505">
							<p className="contact-phone para">+27 74 226 1505</p>
						</a>
					</div>
				</div>
				<div className="row grid-col-3 grids-content1 bottom-border">
					<div className="columns text-md-left links-grid col-md-3 ">
					</div>
					<div className="columns text-center copyright-grid col-md-6 ">
						<p className="lg:text-4xl text-3xl copy-footer-29">@2021 abel. All rights reserved. Design by abelmasingita
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
            </>       
    )
}

export default Footer
