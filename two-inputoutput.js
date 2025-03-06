// 定义字母组合对应的图片
const imageMap = {
    "QU": "assets/qu.jpeg", // 量子宇宙
    "WX": "assets/wx.jpg", // 外星武器
    "ST": "assets/wx.jpg" // 卫星通信
};

function displayImage() {
    const imgElement = document.getElementById("displayedImage");
    const input1 = document.getElementById("charInput1").value.toUpperCase();
    const input2 = document.getElementById("charInput2").value.toUpperCase();

    // 验证输入是否为 A-Z 字母
    if (!input1.match(/[A-Z]/) || !input2.match(/[A-Z]/)) {
        alert("Please enter letters A-Z only!");
        imgElement.style.display = "none";
        return;
    }

    // 组合字母（支持正向和反向匹配）
    let key = input1 + input2;
    let reverseKey = input2 + input1;

    // 检查 imageMap 是否有匹配的图片
    if (imageMap[key]) {
        imgElement.src = imageMap[key];
        imgElement.style.display = "block";
    } else if (imageMap[reverseKey]) {
        imgElement.src = imageMap[reverseKey];
        imgElement.style.display = "block";
    } else {
        imgElement.src = "assets/default.png"; // 没有匹配的组合时显示默认图片
        imgElement.style.display = "block";
    }
}
