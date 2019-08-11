# tiger-dom

自己封装一个JQuery库

## API设计

### 一、获取DOM元素

(1) 通过ID获取元素

```
$('#app')
```

(2) 通过类名（className）获取DOM元素

```
$('.box')
```

(3) 通过标签名(tagName) 获取DOM元素

$('div')

(4) 通过其他方式获取DOM元素 （querySelector、querySelectorAll)

```
${'[type=button]'}
```

## 方法

addClass 向DOM元素上添加一个或多个class

``` $('#app').addClass('active') ```

removeClass 移除DOM元素上的一个或多个class

``` $('#app').removeClass('active')```

toggleClass class 切换

``` $('#app').toggleClass('active')```

## extend 扩展方法

``` $.fn.extend(name, fn) ```

