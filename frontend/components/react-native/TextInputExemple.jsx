import React, { useState, useRef } from 'react';
import { TextInput, View, Text } from 'react-native';

const TextInputExemple = () => {
    const [text, setText] = useState("")

    const inputRef = React.useRef(null);

    return(
        <View>
            TextInput
            <TextInput value={text} onChangeText={setText} autoCapitalize="characters" placeholder="1. 자동 대문자화 (autoCapitalize 값:none or sentences or words or characters) 동작안함"/>
            <TextInput autoComplete="email" placeholder="2. 자동완성 (autoComplete 이메일 둥..) 동작안함" />
            <TextInput autoFocus={true} placeholder="3. 자동으로 포커스 맞춰줌 (autoFocus)" />
            <TextInput blurOnSubmit={true} placeholder="4. 제출 후 입력 흐려짐(blurOnSubmit) 동작안함" />
            <TextInput clearTextOnFocus={true} placeholder="5. 텍스트 입력에 포커스가 있을 때 기존 텍스트가 자동으로 지워짐 (clearTextOnFocus)" />
            <TextInput defaultValue="Initial Text" placeholder="6. Start with this text" />
            <TextInput disabled={true} placeholder="7. 사용안함 (disabled)" />
            <TextInput multiline={true} numberOfLines={2} placeholder="8. 여러줄 사용 (multiline, numberOfLines)"/>
            <TextInput onChangeText={setText} placeholder="9. 텍스트 변경 이벤트 (onChangeText)" />
            <TextInput secureTextEntry={true} placeholder="10. 비밀번호 **** (secureTextEntry)" />
        </View>
    )
}

export default TextInputExemple