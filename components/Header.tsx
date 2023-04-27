import React from "react";
import { Box, Center, Flex, HStack, Icon, Text, Link, LinkProps } from "@chakra-ui/react";
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface IMenuItemProps extends LinkProps {
  isLast?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  isLast = false,
  href = "/",
  ...rest
}) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
  >
    <Link href={href} {...rest}>
      {children}
    </Link>
  </Text>
);

export const Header: React.FC = () => (
  <Center
    w="full"
    px={[10, 1]} // Adjust these values to add padding from left and right
    py={2}
    justifyContent="space-between"
    alignItems="center"
    
    color="Blue"
    bg="#ffffff1c"
    style={{
      fontWeight: "bold",
      fontSize: "15px",
      fontFamily: "Arial, sans-serif",
      padding: "10px 10px 20px 20px",
      borderRadius: "20px"
     
    }}
    
  >
  <a href="https://onramp.pokoapp.xyz/?apiKey=734c4a23-e256-46c4-b917-974f759a6aee&userId=poko_prod&cryptoList=SOL-solana,USDC-solana"  rel="noreferrer" target="_blank" style={{ 
    display: "flex", 
    alignItems: "space-between",
    padding: "20px 10px 10px 10px",
     }}>
    {/* <h1 style={{ margin: "10px 10px 10px 10px" }}>Buy</h1> */}
    <img src="https://i.imgur.com/m1Ld8vi.png" alt="Sol" style={{ width: "150px" }} />
  </a>

    <HStack spacing={200}>

      
    </HStack>
    <Box display={{ md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
      <HStack
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
       
      >
       

          {/* <WalletMultiButton style={{ fontSize: "20px", padding: "10px 10px 10px 10px", color: 'orange', background: 'white', border: '1px solid orange', borderRadius: '50%',fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif' }} 
          
          /> */}
          <WalletMultiButton style={{
  width: '100px',
  height: '100px',
  padding: '10px',
  background: 'white',
  // border: '1px solid purple',
  // borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <img src="https://i.imgur.com/d4TTFAz.png" alt="Your logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
</WalletMultiButton>
        
      </HStack>
    </Box>
  </Center>
);
