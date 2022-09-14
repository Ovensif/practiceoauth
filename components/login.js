import {
  CardContent,
  Card,
  TextField,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";

const loginPage = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (event) => {
    // event.preventDefault()
    console.log(event);
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const { data: session } = useSession();

  console.log(session);

  if (session) {
    return (
      <div>
        Yes! {session.user.name}
        <Button
          sx={{ mt: 1, mr: 2 }}
          type="button"
          variant="outlined"
          size="large"
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="parents">
      <Card sx={{ width: "50%", mt: 4 }}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{ mr: 2 }}
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              {...register("username", { required: true })}
            />
            <TextField
              sx={{ mr: 2 }}
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              {...register("password", { required: true })}
            />

            <Button
              sx={{ mt: 1, mr: 2 }}
              type="submit"
              variant="outlined"
              size="large"
            >
              Login
            </Button>

            <Button
              sx={{ mt: 1, mr: 2 }}
              type="button"
              variant="outlined"
              size="large"
              onClick={() => signIn("google")}
            >
              Gmail
            </Button>

            <Button
              sx={{ mt: 1 }}
              type="button"
              variant="outlined"
              size="large"
              onClick={() => signIn("discord")}
            >
              Discord
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default loginPage;
