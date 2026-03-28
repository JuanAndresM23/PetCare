import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Contenedor principal de la pantalla
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },

  // --- CABECERA ---
  // Contenedor del título y subtítulo
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },
  // Título principal de la pantalla
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  // Subtítulo descriptivo debajo del título
  headerSubtitle: {
    fontSize: 14,
    color: '#AAA',
    marginTop: 4,
  },
  // Contenedor del ícono decorativo de la cabecera
  headerIconContainer: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 50,
  },

  // --- FORMULARIO ---
  // Contenedor del KeyboardAvoidingView
  keyboardView: {
    flex: 1,
  },
  // Contenido interno del ScrollView
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
  },
  // Tarjeta de sección del formulario
  section: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  // Título de cada sección del formulario
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3436',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F6',
    paddingBottom: 5,
  },
  // Etiqueta de cada campo del formulario
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#636E72',
    marginBottom: 8,
    marginLeft: 4,
  },

  // --- INPUTS ---
  // Contenedor de cada input con su ícono
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F2F6',
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#DFE6E9',
    marginBottom: 15,
  },
  // Estilo del input cuando está enfocado
  inputContainerFocused: {
    borderColor: '#4CAF50',
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  // Ícono a la izquierda del input
  inputIcon: {
    marginRight: 10,
  },
  // Campo de texto del formulario
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#2D3436',
  },

  // --- DISEÑO EN FILAS ---
  // Contenedor de campos en fila horizontal
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // Elemento flexible que ocupa el espacio disponible
  flex1: {
    flex: 1,
  },
  // Separador de espacio entre columnas
  width15: {
    width: 15,
  },

  // --- BOTONES ---
  // Botón principal de registro
  registerButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  // Estilo del botón cuando el formulario no es válido
  disabledButton: {
    backgroundColor: '#A29BFE',
    elevation: 0,
    shadowOpacity: 0,
  },
  // Texto del botón de registro
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Ícono dentro de los botones
  buttonIcon: {
    marginRight: 8,
  },
  // Botón para limpiar el formulario
  clearButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  // Texto del botón de limpiar
  clearButtonText: {
    color: '#FF7675',
    fontSize: 16,
    fontWeight: '600',
  },
});