// 通用JavaScript功能

// 动态加载合适分辨率的图片
function loadResponsiveImages() {
    const pixelRatio = window.devicePixelRatio || 1;
    const images = document.querySelectorAll('img[data-src-2x]');
    
    images.forEach(img => {
        let src = img.src;
        
        if (pixelRatio >= 3 && img.dataset.src3x) {
            src = img.dataset.src3x;
        } else if (pixelRatio >= 2 && img.dataset.src2x) {
            src = img.dataset.src2x;
        }
        
        if (src !== img.src) {
            img.src = src;
        }
    });
}

// 返回上一页
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = '../index.html';
    }
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadResponsiveImages();
});

// 工具函数：显示/隐藏元素
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

// 工具函数：切换元素显示状态
function toggleElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}
