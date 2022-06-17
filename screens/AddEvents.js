import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Container from '../components/Container';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import styles from './styles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import DatePickers from '../components/DatePickers';
import DatePickerButtons from '../components/DatePickerButtons';

const AddEvents = () => {
  const [startDatePicker, setStartDatePicker] = useState({
    date: false,
    time: false,
  });
  const [endDatePicker, setEndDatePicker] = useState({
    date: false,
    time: false,
  });
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState({
    date: new Date(),
    time: new Date(),
  });
  const [endDate, setEndDate] = useState({
    date: new Date(),
    time: new Date(),
  });

  const AddCalenderEvent = () => {
    const startDateString = JSON.stringify(startDate.date).slice(1, 11);
    const startTimeString = JSON.stringify(startDate.time).slice(11, 25);
    const endDateString = JSON.stringify(endDate.date).slice(1, 11);
    const endTimeString = JSON.stringify(endDate.time).slice(11, 25);
    const eventConfig = {
      title,
      startDate: startDateString + startTimeString,
      endDate: endDateString + endTimeString,
    };
    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(eventInfo => {
        console.log(JSON.stringify(eventInfo));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const datePickerProps = {
    startDatePicker,
    endDatePicker,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setStartDatePicker,
    setEndDatePicker,
  };

  const DatePickerButtonsProps = {
    title,
    setTitle,
    AddCalenderEvent,
    startDate,
    endDate,
    setStartDatePicker,
    setEndDatePicker,
  };

  return (
    <Container>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerButton} onPress={signOut}>
          <Image
            source={require('../assets/images/left.png')}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <DatePickerButtons {...DatePickerButtonsProps} />
        <DatePickers {...datePickerProps} />
      </View>
    </Container>
  );
};

export default AddEvents;
