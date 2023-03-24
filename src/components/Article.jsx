import React from "react";
import "./ArticleStyles.css";
import Navbar from "./Navbar";
import Search from "./SearchAndNavigation";
import articleImg from "../assets/contraceptive.png";

function Article() {
	return (
		<>
			<Navbar />
			<section className="article_section">
				<div className="article_container">
					<div className="article_hero">
						<img src={articleImg} alt="article img" className="article_img"></img>
						<div className="article_heading_text">
							<h1 className="article_heading">Contraceptives</h1>
							<p className="article_heading_text">
								Many elements need to be considered by women, men, or couples at
								any given point in their lifetimes when choosing the most
								appropriate contraceptive method. These elements include safety,
								effectiveness, availability (including accessibility). and
								acceptability. Voluntary informed choice of contraceptive
								methods is an essential guiding principle, and contraceptive
								counseling, when applicable, might be an important contributor
								to the successful use of contraceptive methods.
							</p>
						</div>
					</div>
					<p className="article_text">
						In choosing a method of contraception, dual protection from the
						simultaneous risk for HIV and other STDs also should be considered.
						Although hormonal contraceptives and IUDs are highly effective at
						preventing pregnancy, they do not protect against STDs, including
						HIV. Consistent and correct use of the male latex condom reduces the
						risk for HIV infection and other STDs, including chlamydial
						infection, gonococcal infection, and trichomoniasis.
						<br />
						<br />
						<span className="artcle_text_span">
							1. Diaphragm or cervical cap— 
						</span>
						 Each of these barrier methods are placed inside the vagina to cover
						the cervix to block sperm. The diaphragm is shaped like a shallow
						cup. The cervical cap is a thimble-shaped cup. Before sexual
						intercourse, you insert them with spermicide to block or kill sperm.
						Visit your doctor for a proper fitting because diaphragms and
						cervical caps come in different sizes. Typical use failure rate for
						the diaphragm: 17%.
						<br />
						<br />
						<span className="artcle_text_span">2. Sponge— </span>
                        The contraceptive sponge contains spermicide and is placed in the vagina
						where it fits over the cervix. The sponge works for up to 24 hours,
						and must be left in the vagina for at least 6 hours after the last
						act of intercourse, at which time it is removed and discarded.
						Typical use failure rate: 14% for women who have never had a baby
						and 27% for women who have had a baby.1
					</p>
				</div>
			</section>
			<Search />
		</>
	);
}

export default Article;
