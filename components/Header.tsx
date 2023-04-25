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
    paddingX={14}
    paddingY={2}
    justifyContent="space-between"
    alignItems="center"
    color="Blue"
    bg="#736a6a2e"
    style={{
      fontWeight: "bold",
      fontSize: "15px",
      fontFamily: "Arial, sans-serif",
      padding: "5px 10px 20px 20px",
     
    }}
    
  >
  <a href="https://onramp.pokoapp.xyz/?apiKey=734c4a23-e256-46c4-b917-974f759a6aee&userId=poko_prod&cryptoList=SOL-solana,USDC-solana"  rel="noreferrer" target="_blank" style={{ 
    display: "flex", 
    alignItems: "space-between",
    padding: "0px 10px 10px 10px",
     }}>
    {/* <h1 style={{ margin: "10px 10px 10px 10px" }}>Buy</h1> */}
    <img src="https://i.imgur.com/qFIgwxW.png" alt="Sol" style={{ width: "250px" }} />
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
          <WalletMultiButton style={{ fontSize: "15px", padding: "10px 10px 10px 10px" }} />
        
      </HStack>
    </Box>
  </Center>
);
