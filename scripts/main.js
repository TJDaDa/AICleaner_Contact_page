// 主页面功能

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initPage();
    
    // 监听localStorage变化以更新计数
    window.addEventListener('storage', updateCounts);
    
    // 页面显示时更新计数
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            updateCounts();
        }
    });
});

function initPage() {
    // 更新计数显示
    updateCounts();
}

function navigateTo(page) {
    // 页面导航
    const pageMap = {
        'duplicate-contacts': 'pages/duplicate-contacts.html',
        'incomplete-contacts': 'pages/incomplete-contacts.html',
        'all-contacts': 'pages/all-contacts.html',
        'backup-contacts': 'pages/backup-contacts.html'
    };
    
    const targetPage = pageMap[page];
    if (targetPage) {
        window.location.href = targetPage;
    } else {
        console.warn('未知页面:', page);
    }
}

function updateCounts() {
    // 从localStorage获取更新的计数
    const duplicateCount = localStorage.getItem('duplicateCount');
    const incompleteCount = localStorage.getItem('incompleteCount');
    const allCount = localStorage.getItem('allCount');
    const backupCount = localStorage.getItem('backupCount');
    
    // 更新页面显示
    if (duplicateCount !== null) {
        const element = document.getElementById('duplicate-count');
        if (element) {
            element.textContent = duplicateCount;
        }
    }
    
    if (incompleteCount !== null) {
        const element = document.getElementById('incomplete-count');
        if (element) {
            element.textContent = incompleteCount;
        }
    }
    
    if (allCount !== null) {
        const element = document.getElementById('all-count');
        if (element) {
            element.textContent = allCount;
        }
    }
    
    if (backupCount !== null) {
        const element = document.getElementById('backup-count');
        if (element) {
            element.textContent = backupCount;
        }
    }
}

// 模拟数据更新函数（用于测试）
function simulateDataUpdate() {
    // 模拟数据变化
    const counts = {
        duplicate: Math.floor(Math.random() * 100),
        incomplete: Math.floor(Math.random() * 50),
        all: Math.floor(Math.random() * 1000) + 500,
        backup: Math.floor(Math.random() * 5)
    };
    
    localStorage.setItem('duplicateCount', counts.duplicate.toString());
    localStorage.setItem('incompleteCount', counts.incomplete.toString());
    localStorage.setItem('allCount', counts.all.toString());
    localStorage.setItem('backupCount', counts.backup.toString());
    
    updateCounts();
}
