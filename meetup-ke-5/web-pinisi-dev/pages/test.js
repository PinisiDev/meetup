import { Center, Flex } from "@chakra-ui/react";

const Test = () => {
    return (
        <Flex width={"100vw"} height={"100vh"} alignContent={"center"} justifyContent={"center"}>
            <Center bg='tomato' color='white'>
                This is the Center
            </Center>
        </Flex>
    );
}

export default Test;
