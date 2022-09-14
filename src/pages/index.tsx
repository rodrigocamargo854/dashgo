import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "./components/Form/Input";
import { SubmitHandler, useForm } from 'react-hook-form'




type SignInFormData={
  email:string
  password:string
}
export default function SignIn() {
  const { register, handleSubmit } = useForm();

  const  handleSigIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)

  }

  return (
    <Flex w="100wh" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="7"
        borderRadius={8}
        flexDir="column"
        align="center"
        onSubmit={handleSubmit(handleSigIn)}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" ref={register}/>
          <Input name="password" type="password" label="Password" ref={register}/>
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" width='100%'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
