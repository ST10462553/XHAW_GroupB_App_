import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground, Picker } from 'react-native';

// Main Screen
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Image style={styles.logo}
    source={require('./assets/HotelFlaviaLogo.jpg')}/>
    <ImageBackground 
     source={require('./assets/background.jpg')} 
     style={styles.backgroundImage}
    />
      <Button title="Six-Month Courses" onPress={() => navigation.navigate('SixMonthCourses')} />
    </View>
  );
};

// Six-Month Courses Screen
const SixMonthCourses = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.courseSection}>
        <Text style={styles.heading}>First Aid</Text>
        <Image source={require('./first-aid.jpg')} style={styles.courseImage} />
        <Text>• CPR Training{'\n'}•  Wound Care {'\n'} • Emergency Response</Text>
        <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
      </View>

      <View style={styles.courseSection}>
        <Text style={styles.heading}>Sewing</Text>
        <Image source={require('./sewing.jpg') } style={styles.courseImage} />
        <Text>• Garment Construction{'\n'}• Pattern Making {'\n'}    •Advanced Sewing Techniques  </Text>
        <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
      </View>

      <View style={styles.courseSection}>
        <Text style={styles.heading}>Landscaping</Text>
        <Image source={require('./landscaping.jpg')} style={styles.courseImage} />
        <Text>• Garden Design{'\n'}• Plant Care {'\n'} • Landscape Maintenance  </Text>
        <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
      </View>

      <View style={styles.courseSection}>
        <Text style={styles.heading}>Life-Skills</Text>
        <Image source={require('./life-skills.jpg')} style={styles.courseImage} />
        <Text>• Communication Skills {'\n'}• Time Management • Financial Literacy </Text>
        <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
      </View>

      <Button title="Six-Week Courses" onPress={() => navigation.navigate('SixWeekCourses')} style={styles.bigButton} />
    </ScrollView>
  );
};

// Six-Week Courses Screen
const SixWeekCourses = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.courseSection}>
        <Text style={styles.heading}>Child-Minding</Text>
        <Image source={require('./assets/child minding.jpg')} style={styles.circularImage} />
        <Text>• Toddler needs{'\n'}• Educational toys {'\n'} • seven-month to one year old needs {'\n'} • birth to six-month old baby needs    </Text>
        <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
      </View>

      <View style={styles.courseSection}>
        <Text style={styles.heading}>Garden Maintenance</Text>
        <Image source={require('./gardening.jpg')} style={styles.circularImage} />
        <Text>• Pruning and propagation of plants {'\n'}• Planting techniques for different plant types • Water restrictions and the watering requirements of indigenous and exotic plants  </Text>
        <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
      </View>

      <View style={styles.courseSection}>
        <Text style={styles.heading}>Cooking</Text>
        <Image source={require('./assets/cooking.jpg')} style={styles.circularImage} />
        <Text>• Planning meals{'\n'}• Preparation and cooking of meals {'\n'}• Nutritional requirements for a healthy body </Text>
        <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
      </View>
    </ScrollView>
  );
};

// Apply Screen
const ApplyScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [qualification, setQualification] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text>Surname:</Text>
      <TextInput style={styles.input} value={surname} onChangeText={setSurname} />

      <Text>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text>Phone Number:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      <Text>Date of Birth:</Text>
      <TextInput style={styles.input} value={dob} onChangeText={setDob} placeholder="DD/MM/YYYY" />

      <Text>Qualification:</Text>
      <Picker selectedValue={qualification} style={styles.input} onValueChange={(itemValue) => setQualification(itemValue)}>
        <Picker.Item label="First Aid" value="first_aid" />
        <Picker.Item label="Sewing" value="sewing" />
        <Picker.Item label="Landscaping" value="landscaping" />
        <Picker.Item label="Life-Skills" value="life_skills" />
        <Picker.Item label="Child-Minding" value="child_minding" />
        <Picker.Item label="Garden Maintenance" value="garden_maintenance" />
        <Picker.Item label="Cooking" value="cooking" />
      </Picker>

      <Button title="Submit" onPress={() => alert('Form submitted!')} />
    </ScrollView>
  );
};

// App Navigation Setup
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCourses} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCourses} />
        <Stack.Screen name="Apply" component={ApplyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  courseSection: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  circularImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  bigButton: {
    marginTop: 20,
    padding: 20,
  },
   logo: {
    width: 66,
    height: 58,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // This will ensure the image covers the screen
  },
});
