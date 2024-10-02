'use client';

import {
  AbsoluteCenter,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  HStack,
} from '@chakra-ui/react';

export function SiteHeader() {
  return (
    <Flex justify='center'>
      <Breadcrumb separator='-'>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='/about'>About</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}
