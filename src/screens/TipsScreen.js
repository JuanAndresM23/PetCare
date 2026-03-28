// Dependencias externas
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Datos
import { CARE_TIPS } from '../data/tipsData';

// Estilos
import styles from '../styles/TipsStyles';

const TipsScreen = () => {
  // Estado para el índice del consejo actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Estado con el arreglo completo de consejos
  const [tips] = useState(CARE_TIPS);

  // useEffect con array vacío + cleanup: crea el intervalo de rotación automática
  // al montar el componente y lo limpia al desmontarlo para evitar memory leaks
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Avanza al siguiente consejo de forma circular
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, 5000); // Rota cada 5 segundos

    // Función de limpieza: elimina el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  // useEffect con dependencia: se ejecuta cada vez que cambia el consejo actual
  // Actualiza el mensaje informativo en consola
  useEffect(() => {
    console.log(`Mostrando consejo ${currentIndex + 1} de ${tips.length}`);
  }, [currentIndex]);

  // Avanza manualmente al siguiente consejo
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tips.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>

        {/* Indicador visual del consejo actual */}
        <Text style={styles.counter}>
          Consejo {currentIndex + 1} de {tips.length}
        </Text>

        {/* Texto del consejo actual */}
        <Text style={styles.tipText}>{tips[currentIndex].text}</Text>

        {/* Botón manual para avanzar al siguiente consejo */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Siguiente Consejo</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default TipsScreen;