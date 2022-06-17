import {View, Platform} from 'react-native';
import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../screens/styles';

const DatePickers = ({
  startDatePicker,
  endDatePicker,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  setStartDatePicker,
  setEndDatePicker,
}) => {
  const onStartDateSelect = (event, value) => {
    setStartDate(pre => ({...pre, date: value}));
    setStartDatePicker(pre => ({...pre, date: false}));
  };

  const onStartTimeSelect = (event, value) => {
    setStartDate(pre => ({...pre, time: value}));
    setStartDatePicker(pre => ({...pre, time: false}));
  };

  const onEndDateSelect = (event, value) => {
    setEndDate(pre => ({...pre, date: value}));
    setEndDatePicker(pre => ({...pre, date: false}));
  };

  const onEndTimeSelect = (event, value) => {
    setEndDate(pre => ({...pre, time: value}));
    setEndDatePicker(pre => ({...pre, time: false}));
  };
  return (
    <View>
      {startDatePicker.date && (
        <DateTimePicker
          value={startDate.date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onStartDateSelect}
          style={styles.datePicker}
        />
      )}

      {startDatePicker.time && (
        <DateTimePicker
          value={startDate.time}
          mode={'time'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={false}
          onChange={onStartTimeSelect}
          style={styles.datePicker}
        />
      )}
      {endDatePicker.date && (
        <DateTimePicker
          value={endDate.date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onEndDateSelect}
          style={styles.datePicker}
        />
      )}

      {endDatePicker.time && (
        <DateTimePicker
          value={endDate.time}
          mode={'time'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={false}
          onChange={onEndTimeSelect}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

export default DatePickers;
