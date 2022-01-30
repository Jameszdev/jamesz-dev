import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  SimpleGrid
} from '@chakra-ui/react'

import DarkModeSwitch from '../components/DarkModeSwitch'
import ProjectCard from '../components/ProjectCard'
import CardBox from '../components/CardBox'
import CustomIcons from '../components/CustomIcons'
import Container from '../components/Container'
export default function Index() {
  const {colorMode} = useColorMode()

  const bgColor = {
    light: "white",
    dark: "#171923"
  }

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }  

  return (
    <>
      <Container>
        <Head>
          <title>Jamesz.dev - Home</title>
        </Head>

        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
          bg={bgColor[colorMode]}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>👋 Hey! I&apos;m James -</Heading>
            <Text>A 16 year old aspiring software engineer. I love to code whenever I get the chance. This is my personal, portfolio, mess-around website! Scroll down to read more.</Text>
          </Flex>
        </Stack>
      
        <Box as="section" mt={10} mb={20} ml={10} mr={10}>
              <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2" mb={4}>Featured Projects</Heading>
              <SimpleGrid minChildWidth="300px" spacing="40px">
                <ProjectCard
                  title="Jamesz.dev"
                  description="This website you are currently on. My personal, portfolio and more website. Powered by Next.Js and Chakra-UI."
                  repoHref="https://git.pogr.cc/root/jamesz-dev"
                  demoHref="https://jamesz.dev"
                  languageColor="#f1e05a"
                  language="JavaScript"
                />
                <ProjectCard
                  title="Pogr.cc"
                  description="A semi-public Image CDN, URL-Shortner and more."
                  demoHref="https://pogr.cc"
                  languageColor="#f1e05a"
                  language="JavaScript"
                />
                <ProjectCard
                  title="BeatleBot"
                  description="A muti-purpose all in one Discord Bot, with many features. The project that got me to love programming."
                  repoHref="https://git.pogr.cc/root/BeatleBot"
                  demoHref="https://discord.com/api/oauth2/authorize?client_id=703343989377597520&permissions=871886078&scope=bot%20applications.commands"
                  languageColor="#3572A5"
                  language="Python"
                />
              </SimpleGrid>
            </Box>

            {/* <Box as="section" mt={10} mb={20} ml={10} mr={10}>
              <Heading letterSpacing="tight" mt={8} size="lg" fontWeight={700} as="h2" mb={4}>Skils & what I have worked with:</Heading>
              <SimpleGrid minChildWidth="300px" spacing="40px">
                <CardBox
                  title="Coding Languages"
                  description="I started of "
                  ColorScheme="#f1e05a"
                  footerText="JavaScript"
                />
                <CardBox
                  title="Pogr.cc"
                  description="A semi-public Image CDN, URL-Shortner and more."
                  ColorScheme="#f1e05a"
                  footerText="JavaScript"
                />
                <CardBox
                  title="BeatleBot"
                  description="A muti-purpose all in one Discord Bot, with many features. The project that got me to love programming."
                  ColorScheme="#3572A5"
                  footerText="Python"
                />
              </SimpleGrid>
            </Box> */}

      </Container>
    </>
  )
}
