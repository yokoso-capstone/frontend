import Password from "@/components/core/Password";
import { RedButton } from "@/components/core/Button";
import { Formik, Form, Field } from "formik";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Input,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

interface LoginProps {
  isOpen: boolean;
  onClose: any;
}

function Login(props: LoginProps) {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader margin="0 auto">Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            <Form>
              <Stack spacing={4}>
                <Field name="email" type="email">
                  {({ field }: any) => (
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input {...field} variant="outline" placeholder="Email" />
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ field }: any) => (
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Password {...field} />
                    </FormControl>
                  )}
                </Field>
                <RedButton size="md" type="submit">
                  Login
                </RedButton>
              </Stack>
            </Form>
          </Formik>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}

export default Login;
