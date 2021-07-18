
import { Box, Text, useColorModeValue, Image, Stack, Heading } from "@chakra-ui/react"

const Card = () => {

    const IMAGE =
        'https://sektekomik.com/wp-content/uploads/2020/02/fe710002a25021f6e34e-906807-15BNQMmy.jpg';

    return (
        <Box ml="10" mt="12">
            <Box
                role="manga_card"
                p={10}
                maxWidth="330px"
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
            >
                <Box
                    rounded={'lg'}
                    mt={-20}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${IMAGE})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={IMAGE}
                    />
                </Box>
                <Stack pt={10} align={'flex-start'}>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        Magic Emperor
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        {/* @todo Adding Chapter List in Here Component */}
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}

export default Card;