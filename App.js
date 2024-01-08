import react from 'react';
import { View, Text, Image, TextInput, Button, Linking, ScrollView,StyleSheet,TouchableOpacity } from 'react-native';

const linkedin = 'https://www.linkedin.com/in/azka-zandi';
const payzweb = 'https://www.figma.com/file/D1LLlRRgNmXquTgGdvQzGZ/PAYZ?type=design&node-id=152%3A2387&mode=design&t=hyQ3d7K6nr1hv74H-1';
const seems = 'https://www.figma.com/file/92w82L7QG0xlie4o8cH2oZ/Seems?type=design&node-id=0%3A1&mode=design&t=7cNQgeyuo7xwsmxE-1';
const payzmob = 'https://www.figma.com/file/D1LLlRRgNmXquTgGdvQzGZ/PAYZ?type=design&node-id=0%3A1&mode=design&t=hyQ3d7K6nr1hv74H-1';
const grinee = 'https://www.figma.com/file/ZujHqFSu7at9o78EGvevdH/GRINEE?type=design&node-id=0%3A1&mode=design&t=ETgclc2rI1c8xCls-1';
const Porto = () => {
  return (
    <ScrollView>
    <View style={{ backgroundColor: 'skyblue', flex: 1 }}>
      <View style={{ backgroundColor: 'skyblue', padding: 30, alignItems: 'center'}}>
        <Image
          style={{ width: 160, height: 160, borderRadius: 100, marginTop: 20 }}
          source={require('./assets/avaku.jpg')} />
      </View>
      <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'white', fontSize: 24, marginTop: -5 }}> Azka Zandi Permana </Text>
      <Text style={{ fontWeight: 'medium', textAlign: 'center', color: 'white', fontSize: 16 }}> Saya adalah manusia yang {'\n'} gemar mengeksplorasi hal baru. </Text>

      <View style={{alignItems: 'center', marginTop: 20 }}>
      <Button title="Contact Me Here" color="blue" onPress={()=>Linking.openURL(linkedin)} 
      />
      </View>

      <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'white', fontSize: 20, marginTop: 30 }}> My Recent Projects </Text>

      <View style={{ backgroundColor: 'skyblue', padding: 20, alignItems: 'center' }}>
        <Image
          style={{ width: 288, height: 162 }}
          source={require('./assets/pyz.png')} />
      </View>

      <View style={{ marginLeft: 40, flexDirection: 'row'}}>
          <View style={{width: 240}}>
            <Text
            style={styles.boldFont}>
            PAYZ Website
          </Text>
          <Text
            style={styles.normalFont}>
            Figma Design
          </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(payzweb)}
            >
            <Image style={{ width: 20, height: 20, borderRadius: 10}}
            source={require('./assets/iconlink.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>


      <View style={{ backgroundColor: 'skyblue', padding: 20, alignItems: 'center' }}>
        <Image
          style={{ width: 288, height: 162 }}
          source={require('./assets/sms.png')} />
      </View>

       <View style={{ marginLeft: 40, flexDirection: 'row'}}>
          <View style={{width: 240}}>
            <Text
            style={styles.boldFont}>
            Seems
          </Text>
          <Text
            style={styles.normalFont}>
            Figma Design
          </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(seems)}
            >
            <Image style={{ width: 20, height: 20, borderRadius: 10}}
            source={require('./assets/iconlink.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

      <View style={{ backgroundColor: 'skyblue', padding: 20, alignItems: 'center' }}>
        <Image
          style={{ width: 288, height: 162 }}
          source={require('./assets/pyz2.png')} />
      </View>

      <View style={{ marginLeft: 40, flexDirection: 'row'}}>
          <View style={{width: 240}}>
            <Text
            style={styles.boldFont}>
            PAYZ Mobile
          </Text>
          <Text
            style={styles.normalFont}>
            Figma Design
          </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(payzmob)}
            >
            <Image style={{ width: 20, height: 20, borderRadius: 10}}
            source={require('./assets/iconlink.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

      <View style={{ backgroundColor: 'skyblue', padding: 20, alignItems: 'center' }}>
        <Image
          style={{ width: 288, height: 162 }}
          source={require('./assets/grne.png')} />
      </View>

      <View style={{ marginLeft: 40, marginBottom: 30, flexDirection: 'row'}}>
          <View style={{width: 240}}>
            <Text
            style={styles.boldFont}>
            GriNee
          </Text>
          <Text
            style={styles.normalFont}>
            Instagram Feeds
          </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={()=>Linking.openURL(grinee)}
            >
            <Image style={{ width: 20, height: 20, borderRadius: 10}}
            source={require('./assets/iconlink.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boldFont: {
    fontWeight: 'bold', color: 'white', fontSize: 18
  },
  normalFont: {
    fontWeight: 'medium', color: 'white', fontSize: 14
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 100
  },
});

export default Porto;
