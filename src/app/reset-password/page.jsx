import PasswordForm from "@/components/PasswordForm";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const ResetPassword = async ({searchParams}) => {
    const {token} = await searchParams;
    console.log(token); 

  return (
    <div>
        <PasswordForm token={token}/>
    </div>
  );
};

export default ResetPassword;
