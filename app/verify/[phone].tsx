import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSignIn, useSignUp } from "@clerk/clerk-expo";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const Page = () => {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();

  const [code, setCode] = useState("");
  const { signIn } = useSignIn();
  const { signUp, setActive } = useSignUp();

  useEffect(() => {
    if (signin === "true") {
      verifySignIn();
    } else {
      verifyCode();
    }
  }, [code]);
  const verifyCode = async () => {};

  const verifySignIn = async () => {};

  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>6-digit code</Text>
      <Text style={defaultStyles.descriptionText}>
        Code sent tp {phone} unless you already have an account
      </Text>
      <Link href={"/login"} replace asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an accout? Log in
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Page;
