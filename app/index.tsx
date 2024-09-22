import { Link } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 堆栈路由，导航到每条新路由都会添加到堆栈中，如果导航到堆栈中已有路由，堆栈退回到该已存在路由 */}
      {/* 例如/feed导航到/profile，堆栈/feed和/profile，导航到/settings,堆栈/feed,/profile,/settings,导航到/feed，堆栈退回到/feed，push属性不管是否存在都推入堆栈 */}

      <Link href={"/settings"}>settings page</Link>
      <Link href={"/user"}>user page</Link>
      {/* 通常link将子组件封装在text组件中，但并不是所有点击按钮都是text，自定义asChild，在里面写组件 */}
      <Link href={"/test"} asChild>
      {/* 所有属性转发给link组件的第一个子组件，子组件必须支持onPress和onClick属性，href和role也会传递下去，这里没有onClick属性 */}
        <Pressable>
          {/* 不能用button，因为button也有onPress方法，跟Pressable产生冲突 */}
          <Text> test </Text>
        </Pressable>
      </Link>
      {/* push：用户返回，返回新屏幕。
          replace: 使用当前屏幕，router.replace（）强制替换当前屏幕 */}
      <Link href={{pathname: '/user/[id]',params: {id:'bacon'}}}>
        View user
      </Link>
    </View>
  );
}
