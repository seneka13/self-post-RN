import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { bootstrap } from "./src/bootstrap";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { Provider } from "react-redux";
import store from "./src/store";
// import { LogBox } from "react-native";

// LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

const App = () => {
  const [isReady, setIsReady] = useState(false);
  console.log(isReady);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(e) => console.log(e)}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
