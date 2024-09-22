import { Stack } from "expo-router";



//
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}




// _layout.tsx layout route用于创建布局,例如：
// import { Slot } from 'expo-router';

// export default function HomeLayout() {
//   return (
//     <>
//       <Header />
//       <Slot />
//       <Footer />
//     </>
//   );
// }
//这里就实现了为index.tsx页面设置header和footer布局

//那针对多个layout route且不修改url，则用groups
// 例如root下面有_layout.tsx和home.tsx，能匹配/root/home
// 
