import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Parser from 'html-react-parser'
import Footer from "../components/footer"
import { Helmet } from 'react-helmet';

const TAC = (props)=>{


    const FetchMarkDown = useStaticQuery(graphql`
        query TermsAndConditionsPageQuery  {
            markdownRemark(fileAbsolutePath: {regex: "/terms-and-conditions.md/" }) {
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
            <Helmet title="Terms and Conditions | Erik DJ. O'Brien" />
             <main className="body-wrapper" id="non-front-pages">
                <Layout>

                    <section className="author-section">
                        <div className="container" id="off-shore-pages">
                            <h1 className="heading-contact">
                                Terms and Conditions
                            </h1>

                            <div id="terms-and-conditions-content">
                                <div className="">{Parser(data.html)}</div>
                            </div>
                        </div>
                    </section>
                 </Layout>
             </main>
             <Footer/>
        </>
    )
}

export default TAC
