// 备份联系人页面功能

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面状态
    initPageState();
    
    // 绑定事件
    bindEvents();
});

function initPageState() {
    // 检查是否有备份数据
    const hasBackups = checkBackups();
    
    if (hasBackups) {
        showElement('backup-list-state');
        hideElement('empty-state');
        hideElement('backup-details-state');
        document.getElementById('backup-button').style.display = 'block';
        document.getElementById('restore-button').style.display = 'none';
    } else {
        hideElement('backup-list-state');
        showElement('empty-state');
        hideElement('backup-details-state');
        document.getElementById('backup-button').style.display = 'block';
        document.getElementById('restore-button').style.display = 'none';
    }
}

function bindEvents() {
    // 备份按钮事件
    const backupButton = document.getElementById('backup-button');
    if (backupButton) {
        backupButton.addEventListener('click', handleBackup);
    }
    
    // 恢复按钮事件
    const restoreButton = document.getElementById('restore-button');
    if (restoreButton) {
        restoreButton.addEventListener('click', handleRestore);
    }
    
    // 删除备份按钮事件
    const deleteButton = document.querySelector('.delete-button');
    if (deleteButton) {
        deleteButton.addEventListener('click', handleDeleteBackup);
    }
}

function handleBackup() {
    // 显示加载状态
    const backupButton = document.getElementById('backup-button');
    const originalText = backupButton.textContent;
    backupButton.textContent = 'Backing Up...';
    backupButton.disabled = true;
    
    // 模拟备份过程
    setTimeout(() => {
        // 创建新的备份
        const backupData = {
            id: 'backup-' + Date.now(),
            date: new Date().toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }),
            size: '97 KB',
            contacts: generateMockContacts()
        };
        
        // 保存备份数据
        saveBackupData(backupData);
        
        // 恢复按钮状态
        backupButton.textContent = originalText;
        backupButton.disabled = false;
        
        // 更新页面状态
        initPageState();
        
        alert('备份创建成功！');
    }, 2000);
}

function handleRestore() {
    const confirmed = confirm('确定要恢复此备份吗？这将覆盖当前的联系人数据。');
    
    if (confirmed) {
        // 显示加载状态
        const restoreButton = document.getElementById('restore-button');
        const originalText = restoreButton.textContent;
        restoreButton.textContent = 'Restoring...';
        restoreButton.disabled = true;
        
        // 模拟恢复过程
        setTimeout(() => {
            // 恢复按钮状态
            restoreButton.textContent = originalText;
            restoreButton.disabled = false;
            
            alert('恢复成功！');
            
            // 返回备份列表
            showElement('backup-list-state');
            hideElement('backup-details-state');
            document.getElementById('page-title').textContent = 'Back Up Contacts';
            document.getElementById('backup-button').style.display = 'block';
            document.getElementById('restore-button').style.display = 'none';
        }, 2000);
    }
}

function handleDeleteBackup() {
    const confirmed = confirm('确定要删除此备份吗？此操作不可撤销。');
    
    if (confirmed) {
        // 删除当前备份
        deleteCurrentBackup();
        
        // 返回备份列表
        showElement('backup-list-state');
        hideElement('backup-details-state');
        document.getElementById('page-title').textContent = 'Back Up Contacts';
        document.getElementById('backup-button').style.display = 'block';
        document.getElementById('restore-button').style.display = 'none';
        
        alert('备份已删除');
    }
}

function viewBackupDetails(backupId) {
    // 显示备份详情
    showElement('backup-details-state');
    hideElement('backup-list-state');
    hideElement('empty-state');
    
    // 更新页面标题
    document.getElementById('page-title').textContent = 'Aug 28, 2025 at 12:41';
    
    // 显示恢复按钮
    document.getElementById('backup-button').style.display = 'none';
    document.getElementById('restore-button').style.display = 'block';
}

function checkBackups() {
    // 检查是否有备份数据
    const backups = getBackupData();
    return backups && backups.length > 0;
}

function saveBackupData(backupData) {
    // 保存备份数据到localStorage
    const backups = getBackupData() || [];
    backups.push(backupData);
    localStorage.setItem('contactBackups', JSON.stringify(backups));
}

function getBackupData() {
    // 从localStorage获取备份数据
    const data = localStorage.getItem('contactBackups');
    return data ? JSON.parse(data) : null;
}

function deleteCurrentBackup() {
    // 删除当前备份
    const backups = getBackupData() || [];
    if (backups.length > 0) {
        backups.pop(); // 删除最后一个备份
        localStorage.setItem('contactBackups', JSON.stringify(backups));
    }
}

function generateMockContacts() {
    // 生成模拟联系人数据
    return [
        { name: 'A.Mr. Lee', phone: '12369854789' },
        { name: 'A.Mr. Lee', phone: '12369854789' },
        { name: 'B.Mr. Lee', phone: '12369854789' },
        { name: 'B.Mr. Lee', phone: '12369854789' }
    ];
}
