import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView, TextInput, Button, Image, ImageBackground, Animated, TouchableOpacity, StyleSheet, Modal, Alert, Switch} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';



// Create a stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact Us" component={ContactScreen} />
        <Stack.Screen name="Current Student" component={CurrentStudentScreen} />
        <Stack.Screen name="Apply" component={ApplyScreen} />
        <Stack.Screen name="Calculate Total Fees" component={CalculateTotalFeesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Home Screen Component
const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [aiInput, setAiInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const getAIResponse = useCallback(() => {
    const responses = {
      courses: 'We offer various courses like First Aid, Sewing, and Landscaping.',
      hello: 'Hello! How can I assist you today?',
      skills: 'Our courses help you gain marketable skills for better job opportunities.',
    };

    const lowerInput = aiInput.toLowerCase();
    const responseKey = Object.keys(responses).find(key => lowerInput.includes(key));
    const response = responseKey ? responses[responseKey] : "Sorry, I didn't understand your query. Please try asking something else!";
    
    setAiResponse(response);
  }, [aiInput]);

  return (
    <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
      <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/49505cf75c2011213c5d22ed607fc7c9' }} style={styles.image}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8eee609f3b7f87924b436852ee894b9a' }} style={styles.logo} />
        </View>

        <View style={styles.header}>
          <Text style={styles.title}>Empowering the Nation</Text>
          <Text style={styles.subtitle}>Transforming Lives Through Education</Text>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.aiTitle}>Have a question? Ask the AI!</Text>
          <TextInput
            style={styles.aiInput}
            placeholder="Type your question..."
            value={aiInput}
            onChangeText={setAiInput}
          />
          <Button title="Ask" onPress={getAIResponse} color="#007bff" />
          {aiResponse ? (
            <View style={styles.aiResponse}>
              <Text style={styles.responseText}>{aiResponse}</Text>
            </View>
          ) : null}

          <View style={styles.imageNavContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
              <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/e6610f2297128ea3ea7e3ca721a2b9be' }} style={styles.navImage} />
              <Text style={styles.navText}>Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/320246e8b97e8245dd654ee5736c492f' }} style={styles.navImage} />
              <Text style={styles.navText}>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
              <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fec7491398d0ade3e17b9915290bc2bb' }} style={styles.navImage} />
              <Text style={styles.navText}>Contact Us</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Current Student')}>
              <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/58f0f79590814ae4999dba6e820bfa8d' }} style={styles.navImage} />
              <Text style={styles.navText}>Current Student</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Apply')}>
              <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b7b4d8379fb1d02e394cf6ca40134ee1' }} style={styles.navImage} />
              <Text style={styles.navText}>Apply</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Calculate Total Fees')}>
              <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9191490c58afeeae64aa45242a288be7' }} style={styles.navImage} />
              <Text style={styles.navText}>Calculate Fees</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </Animated.View>
  );
};

// Courses Screen Component
const CoursesScreen = () => {
  const courses = [
    { id: 1, title: 'First Aid (6-month)', description: 'Learn essential first aid skills over a six-month period.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d84a577925431f255dac5db70b8139db' } },
    { id: 2, title: 'Sewing (6-month)', description: 'Master sewing techniques to create your own clothing over six months.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/333756fcdf6d54525a39402e3921819f' } },
    { id: 3, title: 'Landscaping (6-month)', description: 'Explore landscaping design and maintenance over six months.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3de4a2459522c99936f776b7308cff0b' } },
    { id: 4 , title: 'Life Skills (6-month)', description: 'Develop personal and professional skills to improve your career prospects.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/45a986ac1840ee1b651bf6a18c42f3f4' } },
    { id: 5, title: 'child minding (6-week)', description: 'Get an introduction to first aid skills in just six weeks.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/55f2ed2ad621ef441179f94aa6a7e29b' } },
    { id: 6, title: 'Cooking Chef (6-week)', description: 'Learn basic sewing techniques in a six-week course.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/af1d3e07535d42aab8c420f22147ceaf' } },
    { id: 7, title: 'Introduction to Landscaping gardening (6-week)', description: 'Learn basic landscaping principles in six weeks.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8c721168a14f6bd5fc2394a6caf00001' } },
    { id: 8, title: 'Basic Life Skills (6-week)', description: 'Learn important life skills for personal and professional growth in six weeks.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/45a986ac1840ee1b651bf6a18c42f3f4' } },
  ];

  return (
    <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d2346fd514d6e226d906bfd85cd48a71' }} style={styles.image}>
      <View style={styles.screen}>
        <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8eee609f3b7f87924b436852ee894b9a' }} style={styles.logo} />
        <Text style={styles.screenTitle}>Available Courses</Text>
        <ScrollView>
          {courses.map((course) => (
            <View key={course.id} style={styles.courseCard}>
              <Image source={course.image} style={styles.courseImage} />
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
            </View>
          ))}
           </ScrollView>
       </View>
</ImageBackground>     
    );
   };

const AboutScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseDetail, setCourseDetail] = useState({ title: '', description: '' });

  const courses = [
    { key: 'first-aid', title: 'First Aid', description: 'Our First Aid course provides essential skills to handle emergency situations with confidence and knowledge.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d84a577925431f255dac5db70b8139db' } },
    { key: 'sewing', title: 'Sewing', description: 'The Sewing course covers basic and advanced techniques to create beautiful and functional garments.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/333756fcdf6d54525a39402e3921819f' } },
    { key: 'landscaping', title: 'Landscaping', description: 'Our Landscaping course teaches skills for designing and maintaining outdoor spaces, enhancing aesthetics and functionality.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/3de4a2459522c99936f776b7308cff0b' } },
    { key: 'life-skills', title: 'Life Skills', description: 'The Life Skills course focuses on developing practical skills for personal and professional growth.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/45a986ac1840ee1b651bf6a18c42f3f4' } },
    { key: 'child-minding', title: 'Child Minding', description: 'Our Child Minding course covers essential skills for caring for children, including safety and developmental activities.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/55f2ed2ad621ef441179f94aa6a7e29b' } },
    { key: 'cooking', title: 'Cooking', description: 'The Cooking course teaches various culinary techniques, from basic to advanced, for preparing delicious meals.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/af1d3e07535d42aab8c420f22147ceaf' } },
    { key: 'garden-maintenance', title: 'Garden Maintenance', description: 'The Garden Maintenance course provides knowledge on maintaining and enhancing garden spaces, including plant care and landscaping.', image: { uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8c721168a14f6bd5fc2394a6caf00001' } },
  ];

  const showDetails = (course) => {
    setCourseDetail(course);
    setModalVisible(true);
  };

  return (
    <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/320246e8b97e8245dd654ee5736c492f' }} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8eee609f3b7f87924b436852ee894b9a' }} style={styles.logo} />
        <Text style={styles.title}>Find Out More</Text>
        <Text style={styles.text}>
          At Empowering the Nation, we offer a variety of courses designed to help individuals enhance their skills and improve their career prospects. Learn about our different training programs and discover how they can benefit you.
        </Text>

        <View style={styles.courseGallery}>
          {courses.map((course) => (
            <TouchableOpacity key={course.key} style={styles.courseItem} onPress={() => showDetails(course)}>
              <Image source={course.image} style={styles.courseImage} />
              <Text style={styles.courseText}>{course.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{courseDetail.title}</Text>
            <Text style={styles.modalDescription}>{courseDetail.description}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>

        <TouchableOpacity style={styles.subButton} onPress={() => navigation.navigate('Apply')}>
          <Text style={styles.subButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

// Contact Us Screen Component
function ContactScreen() {
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [userMessage, setUserMessage] = useState('');

  const sendMessage = () => {
    if (userMessage.trim()) {
      setChatMessages([...chatMessages, { id: chatMessages.length + 1, text: userMessage, sender: 'user' }]);
      setUserMessage('');
    }
  };

  return (
    <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fec7491398d0ade3e17b9915290bc2bb' }} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Contact Us</Text>

        <Text style={styles.subheader}>Our Address</Text>
        <Text style={styles.text}>123 Empowering St, Johannesburg, South Africa</Text>

        <Text style={styles.subheader}>Contact Form</Text>
        <TextInput style={styles.inpute} placeholder="Name" />
        <TextInput style={styles.inpute} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.textarea} placeholder="Message" multiline />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>

        <Text style={styles.subheader}>Follow Us</Text>
        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={() => Alert.alert('Open YouTube')}>
            <FontAwesome name="youtube" size={40} color="#FF0000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Open Facebook')}>
            <FontAwesome name="facebook" size={40} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Open WhatsApp')}>
            <FontAwesome name="whatsapp" size={40} color="#25D366" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Open Instagram')}>
            <FontAwesome name="instagram" size={40} color="#C13584" />
          </TouchableOpacity>
        </View>

        <View style={styles.chatSection}>
          <Text style={styles.subheader}>Chat with Us</Text>
          <View style={styles.chatWindow}>
            {chatMessages.map((message) => (
              <View key={message.id} style={[styles.chatBubble, message.sender === 'user' ? styles.userMessage : styles.botMessage]}>
                <Text style={styles.chatText}>{message.text}</Text>
              </View>
            ))}
          </View>
          <View style={styles.chatForm}>
            <TextInput
              style={styles.chatInput}
              value={userMessage}
              onChangeText={(text) => setUserMessage(text)}
              placeholder="Type your message here..."
            />
            <Button title="Send" onPress={sendMessage} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

// Apply Screen Component
const ApplyScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    dob: '',
    email: '',
    qualification: '',
    contact: '',
    gender: 'Male',
    school: '',
    course: 'First Aid',
  });
  const [courses, setCourses] = useState(['First Aid']);
  const [modalVisible, setModalVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleAddCourse = () => {
    setCourses([...courses, 'First Aid']);
  };

  const handleSubmit = () => {
    setModalVisible(true);
    setTimeout(() => {
      setFormData({
        name: '',
        surname: '',
        dob: '',
        email: '',
        qualification: '',
        contact: '',
        gender: 'Male',
        school: '',
        course: 'First Aid',
      });
      setCourses(['First Aid']);
      setModalVisible(false);
    }, 2000);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
      handleInputChange('dob', formattedDate);
    }
  };

  return (
    <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/b7b4d8379fb1d02e394cf6ca40134ee1' }} style={styles.image}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8eee609f3b7f87924b436852ee894b9a' }} style={styles.logo} />
          <Text style={styles.title}>Apply Now</Text>

          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={formData.surname}
            onChangeText={(value) => handleInputChange('surname', value)}
          />

          {/* Date Picker */}
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              value={formData.dob}
              editable={false}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={new Date()}
              mode="date"
              display="default"
              onChange={handleDateChange}
              maximumDate={new Date(2100, 11, 31)}
              minimumDate={new Date(1900, 0, 1)}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Highest Qualification"
            value={formData.qualification}
            onChangeText={(value) => handleInputChange('qualification', value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            keyboardType="phone-pad"
            value={formData.contact}
            onChangeText={(value) => handleInputChange('contact', value)}
          />

          <Picker
            selectedValue={formData.gender}
            style={styles.picker}
            onValueChange={(itemValue) => handleInputChange('gender', itemValue)}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>

          <TextInput
            style={styles.input}
            placeholder="Last School Attended"
            value={formData.school}
            onChangeText={(value) => handleInputChange('school', value)}
          />

          {courses.map((course, index) => (
            <Picker
              key={index}
              selectedValue={course}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => {
                const updatedCourses = [...courses];
                updatedCourses[index] = itemValue;
                setCourses(updatedCourses);
              }}
            >
              <Picker.Item label="First Aid" value="First Aid" />
              <Picker.Item label="Sewing" value="Sewing" />
              <Picker.Item label="Landscaping" value="Landscaping" />
              <Picker.Item label="Life Skills" value="Life Skills" />
              <Picker.Item label="Child Minding" value="Child Minding" />
              <Picker.Item label="Cooking" value="Cooking" />
              <Picker.Item label="Garden Maintenance" value="Garden Maintenance" />
            </Picker>
          ))}

          <TouchableOpacity style={styles.submitButton} onPress={handleAddCourse}>
            <Text style={styles.submitButtonText}>Select Another Course</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit Application</Text>
          </TouchableOpacity>

          {/* Modal for success message */}
          <Modal transparent={true} visible={modalVisible} animationType="slide">
            <View style={styles.popupContainer}>
              <View style={styles.popup}>
                <Text style={styles.popupText}>✔ Your application has been received!</Text>
                <TouchableOpacity style={styles.closePopupButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closePopupButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};




// Calculate Total Fees Screen Component
const CalculateTotalFeesScreen = ({ navigation }) => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const courses = {
    'First Aid': 250,
    'Sewing': 200,
    'Landscaping': 300,
    'Life Skills': 167
  };

  const durations = {
    '6-month': 24,
    '6-week': 6
  };

  const handleCourseSelection = (course) => {
    setSelectedCourses((prevCourses) => {
      if (prevCourses.includes(course)) {
        return prevCourses.filter((item) => item !== course);
      } else {
        return [...prevCourses, course];
      }
    });
  };

  const handleCalculatePrice = () => {
    if (selectedCourses.length === 0 || !selectedDuration) {
      Alert.alert("Please select at least one course and a duration.");
      return;
    }

    const weeks = durations[selectedDuration];
    let totalPrice = selectedCourses.reduce((sum, course) => {
      return sum + courses[course] * weeks;
    }, 0);

    // Apply discount for multiple courses
    const discount = selectedCourses.length > 1 ? 0.1 : 0;
    totalPrice *= 1 - discount;

    setCalculatedPrice(`Total Price: ZAR ${totalPrice.toFixed(2)} (${discount > 0 ? `10% discount applied` : `No discount`})`);
  };

  const handleReset = () => {
    setSelectedCourses([]);
    setSelectedDuration('');
    setCalculatedPrice(null);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/9191490c58afeeae64aa45242a288be7' }}
        style={styles.backgroundImage}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Calculate Course Price</Text>

        <Text style={styles.label}>Select Courses</Text>
        {Object.keys(courses).map((course) => (
          <TouchableOpacity
            key={course}
            style={[
              styles.courseOption,
              selectedCourses.includes(course) && styles.courseOptionSelected
            ]}
            onPress={() => handleCourseSelection(course)}
          >
            <Text style={styles.courseText}>{course} (ZAR {courses[course]} per week)</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.callabel}>Select Duration</Text>
        <View style={styles.caldropdownContainer}>
          <Picker
            selectedValue={selectedDuration}
            onValueChange={(itemValue) => setSelectedDuration(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Choose a duration" value="" />
            <Picker.Item label="6-month course" value="6-month" />
            <Picker.Item label="6-week course" value="6-week" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.calculateButton} onPress={handleCalculatePrice}>
          <Text style={styles.calculateButtonText}>Calculate Price</Text>
        </TouchableOpacity>

        {calculatedPrice && (
          <Text style={styles.priceDisplay}>{calculatedPrice}</Text>
        )}

        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Reset Selection</Text>
        </TouchableOpacity>

        <View style={styles.bottomButtons}>
          <Button title="Back" onPress={() => navigation.goBack()} />
          <Button title="Enroll Now" onPress={() => navigation.navigate('ApplyScreen')} />
        </View>
      </ScrollView>
    </View>
  );
};















// Currrent student profile
const CurrentStudentScreen = () => {
  // State for profile data
  const [name, setName] = useState('Joana Nkosi');
  const [email, setEmail] = useState('jnkosi@gmail.com');
  const [phone, setPhone] = useState('+27 123 4567');
  const [address, setAddress] = useState('123 Main St, Johannesburg');
  const [currentQualification, setCurrentQualification] = useState('Child Minding');

  // Handle profile update form submit
  const handleProfileUpdate = () => {
    Alert.alert('Profile Updated');
  };

  return (
    <ImageBackground source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/58f0f79590814ae4999dba6e820bfa8d' }} style={styles.image}>
      <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8eee609f3b7f87924b436852ee894b9a' }} style={styles.logo} />
      <ScrollView style={styles.container}>
        
        {/* Profile Information Section */}
        <View style={styles.profileInfo}>
          <Text style={styles.title}>Student Profile</Text>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.text}><Text style={styles.bold}>Name: </Text>{name}</Text>
          <Text style={styles.text}><Text style={styles.bold}>Email: </Text>{email}</Text>
          <Text style={styles.text}><Text style={styles.bold}>Phone: </Text>{phone}</Text>
          <Text style={styles.text}><Text style={styles.bold}>Address: </Text>{address}</Text>
        </View>

        {/* Qualifications Section */}
        <View style={styles.qualificationInfo}>
          <Text style={styles.sectionTitle}>Qualifications</Text>
          <Text style={styles.text}><Text style={styles.bold}>Highest Qualification: </Text>Bachelor's in Arts</Text>
          <Text style={styles.text}><Text style={styles.bold}>Currently Enrolled: </Text>{currentQualification}</Text>
        </View>

        {/* Uploaded Documents Section */}
        <View style={styles.documentsSection}>
          <Text style={styles.sectionTitle}>Uploaded Documents</Text>
          <TouchableOpacity onPress={() => Alert.alert('Open Resume')}>
            <Text style={styles.link}>Resume.pdf</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Open Degree Certificate')}>
            <Text style={styles.link}>Degree Certificate.pdf</Text>
          </TouchableOpacity>
          <Button title="Upload New Document" onPress={() => Alert.alert('Upload Document')} />
        </View>

        {/* Update Profile Section */}
        <View style={styles.updateProfile}>
          <Text style={styles.sectionTitle}>Update Your Information</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="Currently Enrolled Qualification"
            value={currentQualification}
            onChangeText={setCurrentQualification}
          />
          <Button title="Update Profile" onPress={handleProfileUpdate} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  // Main container style for padding
  container: {
    padding: 20,
  },
  // Style for the main image that takes up available space
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Style for the logo with specific dimensions and margin
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  // General screen style to center content
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  // Title style with larger font size and bold weight
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  // Subtitle style with slightly smaller font size
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
  // Content style for centered alignment with padding
  content: {
    alignItems: 'center',
    padding: 20,
  },
  // AI title style with specific font size and margin
  aiTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
  },
  // Input field style for AI responses
  aiInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#fff',
  },
  // Style for AI response container
  aiResponse: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  // Text style for AI response
  responseText: {
    fontSize: 16,
    color: '#000',
  },
  // Container for navigation images, flex-wrap for responsive layout
  imageNavContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  // Style for navigation images
  navImage: {
    width: 150,
    height: 150,
    margin: 5,
  },
  // Style for navigation text, centered and bold
  navText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  // Style for course card, with elevation for shadow effect
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    elevation: 2,
  },
  // Style for course image in course cards
  courseImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  // Style for course titles
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#000',
  },
  // Style for course descriptions
  courseDescription: {
    fontSize: 16,
    color: '#000',
  },
  // Title style for screens with larger font size
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },

  // General input field style
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  // Style for standard input fields with padding and border
  inpute: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000',
  },
  // Style for text area with border and padding
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    height: 100,
    backgroundColor: '#fff',
    color: '#000',
  },

  // Header style for sections with larger font
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  // Subheader style for additional section titles
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  // General text style for content
  text: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#fff',
  },

  // Style for submit buttons
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  // Text style for button labels
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  // Style for social media buttons layout
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  // Section style for chat features
  chatSection: {
    marginTop: 30,
  },
  // Style for chat window container
  chatWindow: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    height: 200,
    marginBottom: 10,
  },
  // Style for individual chat bubbles
  chatBubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  // Style for user messages in chat
  userMessage: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-end',
  },
  // Style for bot messages in chat
  botMessage: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-start',
  },
  // Text style for chat messages
  chatText: {
    color: '#fff',
  },
  // Style for chat input form layout
  chatForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Style for chat input field
  chatInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  // Style for user profile information display
  profileInfo: {
    marginBottom: 20,
  },
  // Title style for profile sections
  qualificationInfo: {
    marginBottom: 20,
  },
  // Style for document sections in profiles
  documentsSection: {
    marginBottom: 20,
  },
  // Style for document links
  link: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  // Style for profile update sections
  updateProfile: {
    marginBottom: 20,
  },

  bold: {
    color: '#000',
  },

  courseGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  courseItem: {
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
  },

  courseText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    color: '#000',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  modalDescription: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },
  
  subButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },

  subButtonText: {
    color: '#fff',
    fontSize: 16,
  }, 
 label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.3, // Adjust opacity for better readability
  },
  
  callabel: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
  },
  courseOption: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 8,
    marginVertical: 5,
  },
  courseOptionSelected: {
    backgroundColor: '#007AFF',
  },
  courseText: {
    fontSize: 16,
    color: '#333',
  },
  caldropdownContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  calculateButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  priceDisplay: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
});

export default App;