// app/+not-found.tsx
import { Text, View, StyleSheet } from 'react-native'; // Or react-native-web if needed

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text>404: Page Not Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});