import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const ModelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="mark2-model"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[300, 480, 640]}
    h={[300, 480, 640]}
    position="relative"
    display="flex"
    justifyContent="center"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  )
}

export default Loader
