import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "./components/Form/Input";
import { SubmitHandler, useForm, FieldError } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";

const signInFormSchma = yup.object().shape({
  email: yup
    .string()
    .required("email obrigatório")
    .email("formato de email invalido"),
  password: yup.string().required("password obrigatório"),
});

type SignInFormData = {
  email: string;
  password: string;
  errors: FieldError;
};

export default function SignIn() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchma),
  });

  const handleSigIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (!!formState.errors) {
      router.push("/dashboard");
    }
  };
  const { errors } = formState;

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
            error={errors.email as FieldError}
            {...register("email", { required: "Email obrigatório" })}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            error={errors.password as FieldError}
            {...register("password")}
          />
        </Stack>
        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt="6"
          colorScheme="pink"
          width="100%"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
