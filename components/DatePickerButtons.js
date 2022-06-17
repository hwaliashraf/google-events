import {View, Text, TouchableOpacity, Button, TextInput} from 'react-native';
import React from 'react';
import styles from '../screens/styles';

const DatePickerButtons = ({
  title,
  setTitle,
  AddCalenderEvent,
  startDate,
  endDate,
  setStartDatePicker,
  setEndDatePicker,
}) => {
  const showStartDatePicker = () => {
    setStartDatePicker(pre => ({...pre, date: true}));
  };

  const showStartTimePicker = () => {
    setStartDatePicker(pre => ({...pre, time: true}));
  };

  const showEndDatePicker = () => {
    setEndDatePicker(pre => ({...pre, date: true}));
  };

  const showEndTimePicker = () => {
    setEndDatePicker(pre => ({...pre, time: true}));
  };
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={text => setTitle(text)}
        value={title}
        placeholder="Event Title"
        placeholderTextColor="grey"
      />
      <View style={styles.pickerContainer}>
        <TouchableOpacity onPress={showStartDatePicker}>
          <Text style={styles.text}>
            📅 Star Date: {startDate.date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showStartTimePicker}>
          <Text style={styles.text}>
            🕗 Start Time: {startDate.time.toLocaleTimeString()}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerContainer}>
        <TouchableOpacity onPress={showEndDatePicker}>
          <Text style={styles.text}>
            📅 End Date: {endDate.date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showEndTimePicker}>
          <Text style={styles.text}>
            🕗 End Time: {endDate.time.toLocaleTimeString()}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Add to calender"
          onPress={AddCalenderEvent}
          color="#837DFF"
        />
      </View>
    </>
  );
};

export default DatePickerButtons;
