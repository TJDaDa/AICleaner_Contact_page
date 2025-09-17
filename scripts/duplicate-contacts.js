// 重复联系人页面功能

let selectedContactsCount = 0;
let isSelectAllMode = false;

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面状态
    initPageState();
    
    // 绑定事件
    bindEvents();
    
    // 初始化滚动标题效果
    initScrollTitleEffect();
    
    // 更新选择状态
    updateSelectAllButton();
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
    
    // 复选框变化事件
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });
}

function initScrollTitleEffect() {
    const content = document.querySelector('.content');
    const tableHeaderTitle = document.getElementById('table-header-title');
    const headerTitle = document.getElementById('header-title');
    
    if (!content || !tableHeaderTitle || !headerTitle) return;
    
    let lastScrollTop = 0;
    let isScrollingDown = false;
    
    content.addEventListener('scroll', function() {
        const scrollTop = content.scrollTop;
        const tableHeaderHeight = tableHeaderTitle.offsetHeight;
        const halfHeight = tableHeaderHeight / 2;
        
        // 判断滚动方向
        isScrollingDown = scrollTop > lastScrollTop;
        
        if (scrollTop >= halfHeight) {
            // 表头标题隐藏一半后，开始显示导航栏标题
            const opacity = Math.min((scrollTop - halfHeight) / halfHeight, 1);
            headerTitle.style.opacity = opacity;
            tableHeaderTitle.style.opacity = Math.max(0, 1 - opacity);
        } else {
            // 表头标题显示大于一半时，导航栏标题隐藏
            headerTitle.style.opacity = 0;
            tableHeaderTitle.style.opacity = 1;
        }
        
        lastScrollTop = scrollTop;
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
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    checkedBoxes.forEach(checkbox => {
        const label = checkbox.nextElementSibling;
        const contactInfo = {
            name: label.querySelector('.contact-name')?.textContent || '',
            phone: label.querySelector('.contact-phone')?.textContent || ''
        };
        selectedContacts.push(contactInfo);
    });
    
    return selectedContacts;
}

function handleCheckboxChange(event) {
    const checkbox = event.target;
    
    // 更新选中计数
    updateSelectedCount();
    
    // 更新选择全部按钮状态
    updateSelectAllButton();
}

function updateSelectedCount() {
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    selectedContactsCount = checkedBoxes.length;
}

function updateSelectAllButton() {
    const selectAllBtn = document.getElementById('select-all-btn');
    const totalCheckboxes = document.querySelectorAll('input[type="checkbox"]').length;
    
    if (!selectAllBtn) return;
    
    if (selectedContactsCount > 0) {
        selectAllBtn.textContent = 'Deselect All';
        isSelectAllMode = false;
    } else {
        selectAllBtn.textContent = 'Select All';
        isSelectAllMode = true;
    }
}

function toggleSelectAll() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    if (isSelectAllMode) {
        // 全选
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        selectAllBtn.textContent = 'Deselect All';
        isSelectAllMode = false;
    } else {
        // 取消全选
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        selectAllBtn.textContent = 'Select All';
        isSelectAllMode = true;
    }
    
    updateSelectedCount();
}

function selectAllInGroup(groupName) {
    const groupCheckboxes = document.querySelectorAll(`input[name="${groupName}"]`);
    const checkedCount = document.querySelectorAll(`input[name="${groupName}"]:checked`).length;
    
    // 如果组内所有项都已选中，则取消全选；否则全选
    const shouldSelectAll = checkedCount < groupCheckboxes.length;
    
    groupCheckboxes.forEach(checkbox => {
        checkbox.checked = shouldSelectAll;
    });
    
    updateSelectedCount();
    updateSelectAllButton();
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

// 工具函数
function showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'block';
    }
}

function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = 'none';
    }
}