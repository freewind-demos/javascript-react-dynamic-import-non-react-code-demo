export function initDynamicContent(container) {
    // 创建一个容器div，设置样式使其有明显的边界
    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px';
    wrapper.style.border = '3px dashed #ff4400';
    wrapper.style.borderRadius = '8px';
    wrapper.style.backgroundColor = '#fff8f0';
    wrapper.style.margin = '20px 0';

    // 添加标题
    const title = document.createElement('h2');
    title.textContent = 'Dynamic DOM Content';
    title.style.color = '#ff4400';
    wrapper.appendChild(title);

    // 添加一些文本
    const text = document.createElement('p');
    text.textContent = 'This content was added using vanilla JavaScript DOM manipulation!';
    wrapper.appendChild(text);

    // 添加一个按钮
    const button = document.createElement('button');
    button.textContent = 'Click me!';
    button.style.padding = '8px 16px';
    button.style.backgroundColor = '#ff4400';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.onclick = () => alert('Button clicked!');
    wrapper.appendChild(button);

    // 将wrapper添加到传入的容器中
    container.appendChild(wrapper);
}
