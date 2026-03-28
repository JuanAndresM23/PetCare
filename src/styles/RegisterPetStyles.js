import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Mismo fondo suave que el listado
  },
  // --- ESTILOS DE LA CABECERA ---
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D3436',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#636E72',
    marginTop: 2,
  },
  headerIconContainer: {
    backgroundColor: '#E8F5E9', // Verde muy pálido
    padding: 12,
    borderRadius: 50,
  },
  // --- ESTILOS DEL FORMULARIO ---
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
  },
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3436',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F6',
    paddingBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#636E72',
    marginBottom: 8,
    marginLeft: 4,
  },
  // --- ESTILOS DE LOS INPUTS CON ICONOS ---
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F2F6', // Gris muy suave
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#DFE6E9',
    marginBottom: 15,
  },
  inputContainerFocused: {
    borderColor: '#4CAF50', // Borde verde al enfocar
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1, // Ocupa el resto del ancho
    paddingVertical: 12,
    fontSize: 16,
    color: '#2D3436',
  },
  // --- ESTILOS DE DISEÑO EN FILAS ---
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  width15: {
    width: 15, // Espacio entre columnas
  },
  // --- ESTILOS DE LOS BOTONES ---
  registerButton: {
    backgroundColor: '#4CAF50', // Verde vibrante
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row', // Icono + Texto
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  disabledButton: {
    backgroundColor: '#A29BFE', // Color pastel cuando no es válido
    elevation: 0,
    shadowOpacity: 0,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginRight: 8,
  },
  clearButton: {
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  clearButtonText: {
    color: '#FF7675', // Rojo suave
    fontSize: 16,
    fontWeight: '600',
  },
});