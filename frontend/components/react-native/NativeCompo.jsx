import React from 'react';
import {Text, View, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import logo from '/assets/reactLOGO.svg';

function NativeCompo(){
    const hrefAttrs = { download: true, rel: "nofollow", target: "blank" };

    return(
    <ScrollView style={styles.container}>
        ScrollView는 화면을 스크롤할 수 있게 함(HTML: div)
        <View style={styles.box}>
        View는 컴포넌트들을 그룹화하고 레이아웃을 구성하는 데 사용됨(HTML: div)
        <View role="acticle">
            role 속성으로 Semantic HTML을 구현할 수 있음(acticle)
            <Text role="paragraph">p태그(paragraph)</Text>
            <Text role="heading">H1(heading) css는 따로 만들어줘야함</Text>
            <Text role="heading" aria-level={2}>H2(heading aria-level 설정)</Text>
        </View>
        <ScrollView></ScrollView>
        <TextInput></TextInput>
        </View>

        <View>
        Text
        <Text>Text는 p태그와 대응됨</Text>
        a태그 사용
        <Text href="/">a태그</Text>
        <Text href="/document.pdf" hrefAttrs={hrefAttrs} >여러 속성</Text>
        </View>

        <View>
        Image
        <Image source={logo} style={styles.imgs} />
        <Image source={{ uri: "https://image.fmkorea.com/files/attach/new4/20240816/7366999221_14339012_99b983892094b5c6d2fc3736e15da7d1.jpeg"}} style={styles.imgs}/>
        </View>

    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5'
    },
    box: {
        backgroundColor: '#F6DFDF'
    },
    imgs: {
        width: 50,
        height: 50,
    }
})

export default NativeCompo