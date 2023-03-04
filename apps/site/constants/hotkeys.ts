interface Hotkey {
  key: string;
  description: string;
}

export const ToggleColorScheme: Hotkey = {
  key: "ctrl+J",
  description: "Toggles the current color scheme between light and dark.",
};
