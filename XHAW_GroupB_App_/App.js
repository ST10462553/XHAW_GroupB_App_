import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Image, Picker, ImageBackground, TouchableOpacity, Linking, CheckBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Image Imports
import firstAidImage from './assets/first-aid.jpg';
import sewingImage from './assets/sewing.jpg';
import landscapingImage from './assets/landscaping.jpg';
import lifeSkillsImage from './assets/life-skills.jpg';
import childMindingImage from './assets/child-minding.jpg';
import gardenMaintenanceImage from './assets/gardening.jpg';
import cookingImage from './assets/cooking.jpg';

// Stack Navigator
const Stack = createStackNavigator();

// Main Screen
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('./assets/background.jpg')} 
        style={styles.backgroundImage}
      >
        <Image style={styles.logo} source={require('./assets/HotelFlaviaLogo.jpg')} />
        <View style={styles.overlay}>
          <Button title="Six-Month Courses" onPress={() => navigation.navigate('SixMonthCourses')} />
          <Button title="Six-Week Courses" onPress={() => navigation.navigate('SixWeekCourses')} />
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('FindOutMore')}>
            <Text style={styles.buttonText}>Find Out More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('CalculateFees')}>
            <Text style={styles.buttonText}>Calculate Fees</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('ContactUs')}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Apply')}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

// Six-Month Courses Screen
const SixMonthCourses = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {[{
        name: 'First Aid',
        description: '• CPR Training\n• Wound Care\n• Emergency Response',
        image: firstAidImage
      }, {
        name: 'Sewing',
        description: '• Garment Construction\n• Pattern Making\n• Advanced Sewing Techniques',
        image: sewingImage
      }, {
        name: 'Landscaping',
        description: '• Garden Design\n• Plant Care\n• Landscape Maintenance',
        image: landscapingImage
      }, {
        name: 'Life-Skills',
        description: '• Communication Skills\n• Time Management\n• Financial Literacy',
        image: lifeSkillsImage
      }].map((course, index) => (
        <View key={index} style={styles.courseSection}>
          <Text style={styles.heading}>{course.name}</Text>
          <Image source={course.image} style={styles.courseImage} />
          <Text>{course.description}</Text>
          <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
        </View>
      ))}
    </ScrollView>
  );
};

// Six-Week Courses Screen
const SixWeekCourses = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {[{
        name: 'Child-Minding',
        description: '• Toddler needs\n• Educational toys\n• 7 months to 1 year old needs\n• Birth to 6-month old baby needs',
        image: childMindingImage
      }, {
        name: 'Garden Maintenance',
        description: '• Pruning and propagation of plants\n• Planting techniques for different plant types\n• Water restrictions and watering requirements of plants',
        image: gardenMaintenanceImage
      }, {
        name: 'Cooking',
        description: '• Planning meals\n• Preparation and cooking of meals\n• Nutritional requirements for a healthy body',
        image: cookingImage
      }].map((course, index) => (
        <View key={index} style={styles.courseSection}>
          <Text style={styles.heading}>{course.name}</Text>
          <Image source={course.image} style={styles.circularImage} />
          <Text>{course.description}</Text>
          <Button title="Apply" onPress={() => navigation.navigate('Apply')} />
        </View>
      ))}
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

  const handleSubmit = () => {
    console.log('Form Data:', { name, surname, email, phone, dob, qualification });
    if (name && surname && email && phone && dob && qualification) {
      alert('Form submitted!');
    } else {
      alert('Please fill out all fields.');
    }
  };

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
      <Picker
        selectedValue={qualification}
        style={styles.input}
        onValueChange={(itemValue) => setQualification(itemValue)}
      >
        <Picker.Item label="First Aid" value="first_aid" />
        <Picker.Item label="Sewing" value="sewing" />
        <Picker.Item label="Landscaping" value="landscaping" />
        <Picker.Item label="Life-Skills" value="life_skills" />
        <Picker.Item label="Child-Minding" value="child_minding" />
        <Picker.Item label="Garden Maintenance" value="garden_maintenance" />
        <Picker.Item label="Cooking" value="cooking" />
      </Picker>

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

// Find Out More Screen
const FindOutMoreScreen = () => {
  const courseDetails = {
    'first-aid': {
      title: 'First Aid',
      description: 'Our First Aid course provides essential skills to handle emergency situations with confidence and knowledge.',
      image: require('./assets/first-aid.jpg'),
    },
    'sewing': {
      title: 'Sewing',
      description: 'The Sewing course covers basic and advanced techniques to create beautiful and functional garments.',
      image: require('./assets/sewing.jpg'),
    },
    'landscaping': {
      title: 'Landscaping',
      description: 'Our Landscaping course teaches skills for designing and maintaining outdoor spaces, enhancing aesthetics and functionality.',
      image: require('./assets/landscaping.jpg'),
    },
    'life-skills': {
      title: 'Life Skills',
      description: 'The Life Skills course focuses on developing practical skills for personal and professional growth.',
      image: require('./assets/life-skills.jpg'),
    },
    'child-minding': {
      title: 'Child Minding',
      description: 'Our Child Minding course covers essential skills for caring for children, including safety and developmental activities.',
      image: require('./assets/child-minding.jpg'),
    },
    'cooking': {
      title: 'Cooking',
      description: 'The Cooking course teaches various culinary techniques, from basic to advanced, for preparing delicious meals.',
      image: require('./assets/cooking.jpg'),
    },
    'garden-maintenance': {
      title: 'Garden Maintenance',
      description: 'The Garden Maintenance course provides knowledge on maintaining and enhancing garden spaces, including plant care and landscaping.',
      image: require('./assets/gardening.jpg'),
    }
  };

  return (
    <ScrollView style={styles.container}>
      {Object.keys(courseDetails).map((key) => {
        const course = courseDetails[key];
        return (
          <View key={key} style={styles.courseSection}>
            <Text style={styles.heading}>{course.title}</Text>
            <Image source={course.image} style={styles.courseImage} />
            <Text>{course.description}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

// Calculate Fees Screen
const CalculateFeesScreen = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);
  const [discount, setDiscount] = useState(0);

  const courseFees = {
    'first-aid': 2000,
    'sewing': 2500,
    'landscaping': 3000,
    'life-skills': 1500,
    'child-minding': 2200,
    'cooking': 2700,
    'garden-maintenance': 2600
  };

  const calculateTotal = () => {
    const feePerCourse = courseFees[selectedCourse] || 0;
    const total = feePerCourse * numberOfParticipants;
    return total - (total * (discount / 100));
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Select Course:</Text>
      <Picker
        selectedValue={selectedCourse}
        style={styles.input}
        onValueChange={(itemValue) => setSelectedCourse(itemValue)}
      >
        <Picker.Item label="First Aid" value="first-aid" />
        <Picker.Item label="Sewing" value="sewing" />
        <Picker.Item label="Landscaping" value="landscaping" />
        <Picker.Item label="Life Skills" value="life-skills" />
        <Picker.Item label="Child Minding" value="child-minding" />
        <Picker.Item label="Cooking" value="cooking" />
        <Picker.Item label="Garden Maintenance" value="garden-maintenance" />
      </Picker>

      <Text>Number of Participants:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numberOfParticipants.toString()}
        onChangeText={(text) => setNumberOfParticipants(parseInt(text, 10))}
      />

      <Text>Discount (%):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={discount.toString()}
        onChangeText={(text) => setDiscount(parseInt(text, 10))}
      />

      <Text>Total Fees: ZAR {calculateTotal()}</Text>
    </ScrollView>
  );
};

// Contact Us Screen
const ContactUsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Contact Us</Text>
      <Text>Email: contact@empoweringthenation.co.za</Text>
      <Text>Phone: +27 11 123 4567</Text>
      <Text>Address: 123 Empowerment Street, Johannesburg, South Africa</Text>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Dark overlay to enhance readability
    padding: 16,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  courseSection: {
    marginBottom: 20,
  },
  courseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  circularImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCourses} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCourses} />
        <Stack.Screen name="Apply" component={ApplyScreen} />
        <Stack.Screen name="FindOutMore" component={FindOutMoreScreen} />
        <Stack.Screen name="CalculateFees" component={CalculateFeesScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

