import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Parser from 'html-react-parser';
import Footer from "../components/footer"

const PP = (props)=>{


    const FetchMarkDown = useStaticQuery(graphql`
		 query PrivacyPolicyPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/privacy-policy.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

    const data = {...FetchMarkDown.markdownRemark};
    


    return(
        <>
            <main className="body-wrapper" id="non-front-pages">
                <Layout>
					<div className="container" id="off-shore-pages">
						<h1 className="heading-contact">
							Privacy Policy
						</h1>

						<div id="privacy-policy-content">
							<div className="">{Parser(data.html)}</div>
						</div>
					</div>
				</Layout>
             </main>
			 <Footer/>
        </>
    )
}

export default PP;
