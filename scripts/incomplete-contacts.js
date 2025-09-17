// 不完整联系人页面功能

document.addEventListener('DOMContentLoaded', function() {
    // 模拟数据状态
    let hasIncompleteContacts = true; // 可以切换为false来显示空状态
    
    // 初始化页面状态
    initPageState();
    
    // 绑定事件
    bindEvents();
});

function initPageState() {
    // 根据数据状态显示相应内容
    const hasIncompleteContacts = checkIncompleteContacts();
    
    if (hasIncompleteContacts) {
        showElement('selection-state');
        hideElement('empty-state');
        document.getElementById('select-all-btn').style.display = 'block';
    } else {
        hideElement('selection-state');
        showElement('empty-state');
        document.getElementById('select-all-btn').style.display = 'none';
    }
    
    updateDeleteButton();
}

function bindEvents() {
    // 全选按钮事件
    const selectAllBtn = document.getElementById('select-all-btn');
    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', handleSelectAll);
    }
    
    // 删除按钮事件
    const deleteButton = document.getElementById('delete-button');
    if (deleteButton) {
        deleteButton.addEventListener('click', handleDelete);
    }
    
    // 复选框变化事件
    const checkboxes = document.querySelectorAll('.contact-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateDeleteButton);
    });
}

function handleSelectAll() {
    const checkboxes = document.querySelectorAll('.contact-checkbox');
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    
    // 切换所有复选框状态
    checkboxes.forEach(checkbox => {
        checkbox.checked = !allChecked;
    });
    
    updateDeleteButton();
}

function handleDelete() {
    const selectedContacts = getSelectedContacts();
    
    if (selectedContacts.length === 0) {
        alert('请选择要删除的联系人');
        return;
    }
    
    // 确认删除
    const confirmed = confirm(`确定要删除 ${selectedContacts.length} 个不完整的联系人吗？`);
    
    if (confirmed) {
        // 执行删除操作
        console.log('删除联系人:', selectedContacts);
        
        // 模拟删除成功
        alert(`成功删除 ${selectedContacts.length} 个联系人`);
        
        // 更新页面状态
        updateIncompleteCount(0);
        initPageState();
    }
}

function getSelectedContacts() {
    const selectedContacts = [];
    const checkboxes = document.querySelectorAll('.contact-checkbox:checked');
    
    checkboxes.forEach(checkbox => {
        const label = checkbox.nextElementSibling;
        const contactInfo = {
            name: label.querySelector('.contact-name')?.textContent || '',
            phone: label.querySelector('.contact-phone')?.textContent || ''
        };
        selectedContacts.push(contactInfo);
    });
    
    return selectedContacts;
}

function updateDeleteButton() {
    const checkboxes = document.querySelectorAll('.contact-checkbox:checked');
    const deleteButton = document.getElementById('delete-button');
    
    if (checkboxes.length > 0) {
        deleteButton.disabled = false;
        deleteButton.textContent = `Delete Selected (${checkboxes.length})`;
        deleteButton.classList.remove('secondary');
        deleteButton.classList.add('primary');
    } else {
        deleteButton.disabled = true;
        deleteButton.textContent = 'Delete Selected';
        deleteButton.classList.remove('primary');
        deleteButton.classList.add('secondary');
    }
}

function checkIncompleteContacts() {
    // 模拟检查不完整联系人的逻辑
    // 这里可以调用实际的API或检查本地数据
    return true; // 返回true表示有不完整联系人，false表示无不完整联系人
}

function updateIncompleteCount(count) {
    // 更新主页面的不完整联系人数量
    localStorage.setItem('incompleteCount', count.toString());
}
