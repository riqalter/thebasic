interface Cookie {
  name: string;
  maxAge: number;
}

export const ColorSchemeCookie: Cookie = {
  name: "thebasic-color-scheme",
  maxAge: 60 * 60 * 24 * 30,
};
