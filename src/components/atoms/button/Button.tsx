import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

interface CustomProps extends ButtonProps {
  children: React.ReactNode;
  customType?: "primary" | "secondary" | "terciary";
}

const classNameByType = {
  primary: "border-radius-medium text-body-bold bg-primary text-grey-scale-0",
  secondary:
    "border-radius-medium text-body-bold bg-secondary text-grey-scale-10",
  terciary:
    "border-radius-medium text-body-bold bg-grey-scale-6 text-grey-scale-0",
};

const Button: React.FC<CustomProps> = ({
  children,
  customType = "primary",
  ...props
}) => (
  <>
    <ChakraButton
      px="10"
      py="10"
      className={`border-radius-medium ${classNameByType[customType]}`}
      type="button"
      {...props}
    >
      {children}
    </ChakraButton>
  </>
);

export default Button;
