import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { CARE_TIPS } from '../data/tipsData';
import styles from '../styles/TipsStyles';

const TipsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tips] = useState(CARE_TIPS);

  // Auto-rotating tips with cleanup [cite: 216]
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, 5000); // 5 seconds rotation 

    return () => clearInterval(intervalId); // Cleanup function [cite: 219]
  }, [tips.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tips.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.counter}>
          Consejo {currentIndex + 1} de {tips.length}
        </Text>
        <Text style={styles.tipText}>{tips[currentIndex].text}</Text>
        
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Siguiente Consejo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TipsScreen;