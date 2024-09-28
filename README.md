npx create-expo-app
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
## set up entry point: 
``` yaml
   package.json:
      main: expo-router/entry
```
## enable metro web in app.json:
``` yaml
expo: 
      scheme: myapp
      web: bundler: metro
```

## add expo-router/babel plugin in project
``` javascript
   babel.config.js:
   module.exports = function(api){
      api.cache(true);
      return {
         presets: ['babel-preset-expo'],
         plugins: ['expo-router/babel'],
      };
   }
```

* expo router requires at least `metro@0.76.0`


