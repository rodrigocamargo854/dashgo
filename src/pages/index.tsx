import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "./components/Form/Input";
import { SubmitHandler, useForm, FieldError } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup'




const signInFormSchma= yup.object().shape({
email: yup.string().required().email(),
password: yup.string().required(),
  
})

type SignInFormData = {
  email: string
  password: string
  errors: FieldError
}
export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchma)
  });

  const handleSigIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }
  const { errors } = formState


  console.log(errors)
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
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors.email}
            {...register('email', { required: 'Email obrigatório' })}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            error={errors.password}
            {...register('password')}
          />

        </Stack>
        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt="6"
          colorScheme="pink"
          width='100%'>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
