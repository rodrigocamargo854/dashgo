import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }: InputProps, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name="email"
        id="email"
        color="white"
        width=""
        type='email'
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
        ref={ref}
      />
    </FormControl>
  );
}


export const Input = forwardRef(InputBase)