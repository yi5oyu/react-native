import { View } from 'react-native'

const ViewExemple = () => {
    const handlePointerEnter = (event) => {
        console.log("들어옴")
        event.target.style.backgroundColor = "red"
    }
    const handlePointerLeave = (event) => {
        console.log("나옴")
        event.target.style.backgroundColor = "#FFFF55"
    }
    const handleFocus = () => {
        console.log("포커스됨");
        event.target.innerText = "3. tabIndex={0} 으로 설정해 포커스 받을 수 있게 함"
    }
    const handleBlur = () => {
        console.log("포커스 잃음");
        event.target.innerText = "3. FocusProps (포커스 이벤트 - web에선 클릭 or 탭으로 포커스 얻음)"
    }
    // 링크 동작 제어
    const hrefAttrs = { rel: "external", target: "blank" } // download: true (클릭하면 다운로드 됨)
    const handleLayout = (event) => {
        // event.nativeEvent.layout: 레이아웃 정보를 담고 있는 객체
        const { x, y, width, height } = event.nativeEvent.layout;
        console.log(`x: ${x}, y: ${y}, width: ${width}, height: ${height}`);
    }
    // html: data-custom-attr="customValue" data-another-attr="anotherValue"
    const dataSet = { customAttr: 'customValue', anotherAttr: 'anotherValue' }
    // dir: 텍스트 방향 (ltr: 왼쪽에서 오른쪽 / rtl: 오른쪽에서 왼쪽)
    return(
        <View>
            <View>View</View>
            <View>레이아웃 설정 (flex)</View>
            <View>
                <View>View 속성</View>
                <View>
                    <View>1. AccessibilityProps (View에 접근성 제공)</View>
                    <View onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>2. PointerProps (마우스 커서 이벤트)</View>
                    <View onFocus={handleFocus} onBlur={handleBlur} tabIndex={0}>3. FocusProps (포커스 이벤트 - web에선 클릭 or 탭으로 포커스 얻음)</View>
                    <View href="https://pricetaglist.com/" hrefAttrs={hrefAttrs}>4. href, hrefAttrs (a태그)</View>
                    <View onLayout={handleLayout}>4. onLayout (레이아웃이 계산되거나 변경될 때 호출)</View>
                    <View dataSet={dataSet} dir="ltr" id="exampleView" lang="kr" >5. View에 추가 정보 부여 (dataSet, dir, id, lang)</View>
                    <View testID="uniqueTestID" >6. 테스트에서 사용할 수 있는 testID</View>
                </View>
            </View>
        </View>
    )
}

export default ViewExemple