import { Link } from '@chakra-ui/react'
import React from 'react'
import { FooterLink } from '../../../mockData/data';
const FooterLinks = ({index}) => {
  console.log('index->',FooterLink[index])
  return (<>
    {FooterLink[index].map((link,i)=>
      <Link href={link.link}>{link.title}</Link>
    )}
  </>
  )
}

export default FooterLinks