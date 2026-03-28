# PetCare App 🐾
**Construcción de Software V / Desarrollo Móvil**

## 👤 Información del Estudiante
* **Nombre Completo:** Juan Andres Muñoz, Juan Jose Cortes


---

## Descripción del Proyecto
**PetCare** es una aplicación móvil desarrollada con **React Native CLI** diseñada para la gestión integral de mascotas. La app permite registrar nuevas mascotas mediante formularios validados en tiempo real, visualizar una lista dinámica con iconos personalizados por especie, y consultar detalles específicos como el peso, la edad y una funcionalidad de "Favoritos".

Este proyecto evidencia el dominio de los Hooks fundamentales de React (`useState` y `useEffect`) y la navegación avanzada entre pantallas (Tabs y Stack).

---

## Tecnologías y Dependencias
El proyecto utiliza las siguientes tecnologías y librerías externas:

* **Framework:** React Native CLI (v0.7x)
* **Navegación:** * `@react-navigation/native`
    * `@react-navigation/bottom-tabs` (Menú inferior)
    * `@react-navigation/stack` (Navegación de detalles)
* **Iconos:** `react-native-vector-icons` (Ionicons para el botón de favorito).
* **Entorno Nativo:** Android Studio (SDK 33+, Gradle 8.x).

---

## Instalación y Configuración (Android Studio)

Sigue estos pasos para ejecutar la aplicación en un emulador o dispositivo físico:

### 1. Requisitos Previos
* Tener instalado **Android Studio**.
* Configurar las variables de entorno (`ANDROID_HOME`).
* Un emulador (AVD) configurado y en ejecución.

### 2. Clonar y Preparar el Proyecto
```bash
# Clonar el repositorio
git clone [URL_DE_TU_REPOSITORIO]
cd PetCare

# Instalar dependencias de Node
npm install

#Instalar dependencias adicionales
npm install @react-navigation/native @react-navigation/stack @react-navigation/native-stack @react-navigation/bottom-tabs @react-navigation/drawer react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-reanimated react-native-vector-icons

#Iniciar proyecto 
npx react-native run-android

#Limpieza de Caché de Gradle
cd android
./gradlew clean
cd ..
npx react-native run-android
