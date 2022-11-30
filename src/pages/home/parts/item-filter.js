import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import DatePicker from "react-native-datepicker";
import { SearchBar } from "react-native-elements";
import { Button } from "react-native-elements";

export default ItemFilter = ({
  setInputCity,
  setInputStartDate,
  setInputEndDate,
  handleConfirmSearch,
  inputCity,
  inputStartDate,
  inputEndDate,
}) => {
  return (
    <View style={[styles.container, styles.boxShadow]}>
      <SearchBar
        placeholder="Where do you wanna go?"
        lightTheme
        platform="android"
        value={inputCity}
        containerStyle={styles.searchBar}
        onChangeText={(e) => setInputCity(e)}
        onClear={() => setInputCity("")}
      />
      <Button
        title="Search"
        onPress={handleConfirmSearch}
        titleStyle={{ fontWeight: "600" }}
        buttonStyle={{
          backgroundColor: "#489687",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 7,
          paddingVertical: 10,
        }}
        containerStyle={{
          width: "100%",
          marginVertical: 10,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
  searchBar: {
    borderRadius: 7,
  },
  boxShadow: {
    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  dateContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  datePicker: {
    width: 190,
    borderWidth: 0,
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 2,
    borderRadius: 7,
  },
});
