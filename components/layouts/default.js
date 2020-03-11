import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { RadixProvider, Container } from '@modulz/radix';

function Layout({ path, children, pageTitle, ogImage }) {
  return (
    <RadixProvider>
        <Container size={2}>
          <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />
          <main>{children}</main>
        </Container>
        <Footer />
        <style jsx global>{`
          .cursor-pointer {
            cursor: pointer !important;
          }

          .position-relative {
            position: relative !important;
          }

          .img-fluid {
            max-width: 100%;
            height: auto;
          }

          .stretched-link {
            position: static !important;
          }

          .stretched-link::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
          }
        `}</style>
    </RadixProvider>
  )
}

export default Layout
