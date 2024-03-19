
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  const imageUrl= 'https://images.pexels.com/photos/15874595/pexels-photo-15874595/free-photo-of-close-up-of-a-shiba-dog-sitting-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  return (
    <>
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={{uri: imageUrl}}
          style={styles.image}
        >
          <Text style={styles.name}>Shiba!</Text>
          <Text style={styles.bio}>Unlike doge coin, I'm real.</Text>
        </ImageBackground>

      </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  card: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
    backgroundColor: 'blue',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    overflow: 'hidden',
  },

  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  bio: {
    color: 'white',
    fontSize: 20,
    lineHeight: 24,
    marginHorizontal: 10,
  },
});
