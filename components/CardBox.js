import { useState } from 'react'
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Link,
    Box,
    IconButton,
    Button,
} from '@chakra-ui/react'
import { GitHubIcon, GitLabIcon, YoutubeIcon } from '../components/CustomIcons'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AiOutlineStar } from 'react-icons/ai'

export default function ProjectCard({ title, description, ColorScheme, footerText }) {
    const [opacity, setOpacity] = useState(0)
    const [lineColor, setLineColor] = useState("blue.500")
    const { colorMode } = useColorMode()

    const colorSecondary = {
        light: 'gray.600',
        dark: 'gray.400'
    }

    const boxShadowColor = {
        light: '0px 8px 26px rgba(0, 0, 0, 0.2)',
        dark: '0px 8px 26px rgba(0, 0, 0, 0.7)'
    }
    return (
        <Flex
            flexDir="column"
            _hover={{ transform: 'scale(1.05)', border: `2px solid ${ColorScheme}` }}
            transition="transform .5s ease-in-out, border .5s ease-in-out"
            boxShadow={boxShadowColor[colorMode]}
            borderRadius={5}
            border="2px solid transparent"
            onMouseOver={() => { setOpacity(1), setLineColor(ColorScheme) }}
            onMouseLeave={() => { setOpacity(0), setLineColor("blue.500") }}
        >
            <Flex p={[5, 15, 25]} flexDir="column" justify="space-between" h="100%">
                <Box>
                    <Heading as="h3" size="lg" fontWeight="semibold" mb={2}>{title}</Heading>
                    <Box h={1} w="35%" bgColor={lineColor} transition="background-color .5s ease-in-out" mb={4} />
                    <Text color={colorSecondary[colorMode]}>{description}</Text>
                </Box>
                    <Flex mt={5} align="center">
                        <Box w={3} h={3} mr={1} borderRadius="50%" bgColor={ColorScheme} />
                        <Text fontSize="sm" color={colorSecondary[colorMode]}>{footerText}</Text>
                    </Flex>
                </Flex>
            </Flex>
    )
}