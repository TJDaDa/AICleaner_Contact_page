// 重复联系人页面功能

document.addEventListener('DOMContentLoaded', function() {
    // 模拟数据状态
    let hasDuplicates = true; // 可以切换为false来显示空状态
    
    // 初始化页面状态
    initPageState();
    
    // 绑定事件
    bindEvents();
});

function initPageState() {
    // 根据数据状态显示相应内容
    const hasDuplicates = checkDuplicates();
    
    if (hasDuplicates) {
        showElement('merge-state');
        hideElement('empty-state');
        document.getElementById('merge-button').style.display = 'block';
    } else {
        hideElement('merge-state');
        showElement('empty-state');
        document.getElementById('merge-button').style.display = 'none';
    }
}

function bindEvents() {
    // 合并按钮事件
    const mergeButton = document.getElementById('merge-button');
    if (mergeButton) {
        mergeButton.addEventListener('click', handleMerge);
    }
    
    // 单选按钮变化事件
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', handleRadioChange);
    });
}

function handleMerge() {
    // 获取选中的联系人
    const selectedContacts = getSelectedContacts();
    
    if (selectedContacts.length === 0) {
        alert('请选择要合并的联系人');
        return;
    }
    
    // 执行合并操作
    console.log('合并联系人:', selectedContacts);
    
    // 模拟合并成功
    alert(`成功合并 ${selectedContacts.length} 个联系人`);
    
    // 更新页面状态
    updateDuplicateCount(0);
    initPageState();
}

function getSelectedContacts() {
    const selectedContacts = [];
    const radioGroups = document.querySelectorAll('input[type="radio"]:checked');
    
    radioGroups.forEach(radio => {
        const label = radio.nextElementSibling;
        const contactInfo = {
            name: label.querySelector('.contact-name')?.textContent || '',
            phone: label.querySelector('.contact-phone')?.textContent || ''
        };
        selectedContacts.push(contactInfo);
    });
    
    return selectedContacts;
}

function handleRadioChange(event) {
    const radio = event.target;
    const groupName = radio.name;
    
    // 确保同一组中只有一个被选中
    const groupRadios = document.querySelectorAll(`input[name="${groupName}"]`);
    groupRadios.forEach(r => {
        if (r !== radio) {
            r.checked = false;
        }
    });
}

function checkDuplicates() {
    // 模拟检查重复联系人的逻辑
    // 这里可以调用实际的API或检查本地数据
    return true; // 返回true表示有重复，false表示无重复
}

function updateDuplicateCount(count) {
    // 更新主页面的重复联系人数量
    // 这里可以通过localStorage或其他方式与主页面通信
    localStorage.setItem('duplicateCount', count.toString());
}
