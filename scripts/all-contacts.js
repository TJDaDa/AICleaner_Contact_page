// 所有联系人页面功能

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initPage();
    
    // 绑定事件
    bindEvents();
});

function initPage() {
    // 加载联系人数据
    loadContacts();
}

function bindEvents() {
    // 联系人点击事件
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('.contact-name').textContent;
            const phone = this.querySelector('.contact-phone').textContent;
            
            // 显示联系人详情（这里可以跳转到详情页面）
            console.log('点击联系人:', { name, phone });
            alert(`联系人: ${name}\n电话: ${phone}`);
        });
    });
}

function loadContacts() {
    // 模拟加载联系人数据
    // 这里可以调用实际的API获取联系人数据
    console.log('加载联系人数据...');
}

function updateContactCount(count) {
    // 更新主页面的联系人数量
    localStorage.setItem('allCount', count.toString());
}
