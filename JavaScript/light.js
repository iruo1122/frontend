// 获取按钮元素并为其添加点击事件监听器
    document.getElementById('switch').addEventListener('click', function() {
        // 当按钮被点击时执行这个函数

        // 通过id获取灯泡元素
        const bulb = document.getElementById('bulb');

        // 切换灯泡的'on'类
        // classList.toggle()方法：如果元素有该类就移除，没有就添加
        bulb.classList.toggle('on');

        /*
            工作原理：
            第一次点击：bulb元素添加'on'类 → 应用.light.on样式 → 灯泡变亮
            第二次点击：bulb元素移除'on'类 → 恢复.light样式 → 灯泡变暗
            后续点击：重复上述切换过程
        */
    }); // ← 添加这行来闭合函数和事件监听器