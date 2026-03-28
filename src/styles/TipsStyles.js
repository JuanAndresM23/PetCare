import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Contenedor principal de la pantalla
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 20,
  },
  // Tarjeta visual que contiene el consejo actual
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    elevation: 5,
  },
  // Indicador visual del consejo actual ("X de Y")
  counter: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  // Texto del consejo de cuidado
  tipText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    lineHeight: 26,
  },
  // Botón manual para avanzar al siguiente consejo
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  // Texto del botón de siguiente consejo
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});