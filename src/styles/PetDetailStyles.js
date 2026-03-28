import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Contenedor principal de la pantalla
  container: {
    flex: 1,
    backgroundColor: '#F1F2F6',
    justifyContent: 'center',
    padding: 20,
  },
  // Tarjeta visual con sombra y bordes redondeados
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 8,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  // Emoji representativo de la especie
  emoji: {
    fontSize: 80,
    marginBottom: 10,
  },
  // Nombre de la mascota
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 20,
  },
  // Fila de información con separador inferior
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F6',
  },
  // Etiqueta del campo de información
  label: {
    fontSize: 16,
    color: '#636E72',
    fontWeight: '500',
  },
  // Valor del campo de información
  value: {
    fontSize: 16,
    color: '#2D3436',
    fontWeight: 'bold',
  },

  // === ESTILOS DEL BOTÓN DE FAVORITO (CORREGIDO) ===
  favoriteButton: {
    marginTop: 30, // Separación de la tabla de datos
    backgroundColor: '#F1F2F6', // Color gris por defecto
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: '100%', // Para que ocupe el ancho de la tarjeta
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DFE6E9',
  },
  favoriteActive: {
    backgroundColor: '#FFEAA7', // Amarillo suave cuando es favorito
    borderColor: '#FDCB6E',
  },
  favoriteButtonText: {
    color: '#2D3436',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Botón para volver a la pantalla anterior
  backButton: {
    marginTop: 15,
    padding: 10,
  },
  // Texto del botón de volver
  backButtonText: {
    color: '#0984E3',
    fontSize: 16,
    fontWeight: '600',
  },
});