import { Box } from '@chakra-ui/core';

interface WrapperProps {
  varaint?: 'small' | 'regular';
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  varaint = 'regular',
}) => {
  return (
    <Box
      mt={8}
      mx='auto'
      maxW={varaint === 'regular' ? '800px' : '400px'}
      w='100%'
    >
      {children}
    </Box>
  );
};
