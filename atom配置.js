
boxShadow
inline-flex
accept acceptCharset accessKey action allowFullScreen allowTransparency alt
async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
charSet checked cite classID className colSpan cols content contentEditable
contextMenu controls coords crossOrigin data dateTime default defer dir
disabled download draggable encType form formAction formEncType formMethod
formNoValidate formTarget frameBorder headers height hidden high href hrefLang
htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label
lang list loop low manifest marginHeight marginWidth max maxLength media
mediaGroup method min minLength multiple muted name noValidate nonce open
optimum pattern placeholder poster preload profile radioGroup readOnly rel
required reversed role rowSpan rows sandbox scope scoped scrolling seamless
selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step
style summary tabIndex target title type useMap value width wmode wrap

accentHeight accumulate additive alignmentBaseline allowReorder alphabetic
amplitude arabicForm ascent attributeName attributeType autoReverse azimuth
baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight
clip clipPath clipPathUnits clipRule colorInterpolation
colorInterpolationFilters colorProfile colorRendering contentScriptType
contentStyleType cursor cx cy d decelerate descent diffuseConstant direction
display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground
end exponent externalResourcesRequired fill fillOpacity fillRule filter
filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize
fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy
g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef
gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic
imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength
kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor
limitingConeAngle local markerEnd markerHeight markerMid markerStart
markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode
numOctaves offset opacity operator order orient orientation origin overflow
overlinePosition overlineThickness paintOrder panose1 pathLength
patternContentUnits patternTransform patternUnits pointerEvents points
pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits
r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions
requiredFeatures restart result rotate rx ry scale seed shapeRendering slope
spacing specularConstant specularExponent speed spreadMethod startOffset
stdDeviation stemh stemv stitchTiles stopColor stopOpacity
strikethroughPosition strikethroughThickness string stroke strokeDasharray
strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity
strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor
textDecoration textLength textRendering to transform u1 u2 underlinePosition
underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic
vHanging vIdeographic vMathematical values vectorEffect version vertAdvY
vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing
writingMode x x1 x2 xChannelSelector xHeight xlinkActuate xlinkArcrole
xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlns xmlnsXlink xmlBase
xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
navigator.getCurrentRoutes();
NavigationActions
Dimensions,
interpolate
Interpolation
duration,
shouldComponentUpdate
InteractionManager
requestAnimationFrame():执行控制动画效果的代码
setImmediate/setTimeout():设置延迟执行任务的时间，该可能会影响到正在执行的动画
runAfterInteractions():延迟执行任务，该不会影响到正在执行的动画效果
spring: 基础的单次弹跳物理模型，符合Origami设计标准
friction: 摩擦力，默认为7.
tension: 张力，默认40。
decay: 以一个初始速度开始并且逐渐减慢停止。
velocity: 起始速度，必填参数。
deceleration: 速度衰减比例，默认为0.997。
timing: 从时间范围映射到渐变的值。
duration: 动画持续的时间（单位是毫秒），默认为500。
easing：一个用于定义曲线的渐变函数。阅读Easing模块可以找到许多预定义的函数。iOS默认为Easing.inOut(Easing.ease)。
delay: 在一段时间之后开始动画（单位是毫秒），默认为0。
parallel（同时执行）、sequence（顺序执行）、stagger和delay
inputRange: [0,1],
outputRange: ['0deg', '360deg']
interpolate
pagingEnabled
measure,
chilren,
forceUpdate,
AndroidPermissions,
length,
Number,
entries,logoReact Native0.42
文档
入门课程hot
案例
博客
视频
讨论
热更新
关于

搜索文档
GitHub
TextInput
在GitHub上修改这篇文档
支持我们
TextInput是一个允许用户在应用中通过键盘输入文本的基本组件。本组件的属性提供了多种特性的配置，譬如自动完成、自动大小写、占位文字，以及多种不同的键盘类型（如纯数字键盘）等等。

最简单的用法就是丢一个TextInput到应用里，然后订阅它的onChangeText事件来读取用户的输入。注意，从TextInput里取值这就是目前唯一的做法！即使用onChangeText写入state，然后从this.state中取出值。它还有一些其它的事件，譬如onSubmitEditing和onFocus。一个简单的例子如下：

import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
注意有些属性仅在multiline为true或者为false的时候有效。此外，当multiline=false时，为元素的某一个边添加边框样式（例如：borderBottomColor，borderLeftWidth等）将不会生效。为了能够实现效果你可以使用一个View来包裹TextInput：

import React, { Component } from 'react';
import { AppRegistry, View, TextInput } from 'react-native';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Multiline Placeholder',
    };
  }

  // 你可以试着输入一种颜色，比如red，那么这个red就会作用到View的背景色样式上
  render() {
    return (
     <View style={{
       backgroundColor: this.state.text,
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
     >
       <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
     </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent(
 'AwesomeProject',
 () => UselessTextInputMultiline
);
TextInput在安卓上默认有一个底边框，同时会有一些padding。如果要想使其看起来和iOS上尽量一致，则需要设置padding: 0，同时设置underlineColorAndroid="transparent"来去掉底边框。

又，在安卓上如果设置multiline = {true}，文本默认会垂直居中，可设置textAlignVertical: top样式来使其居顶显示。

又又，在安卓上长按选择文本会导致windowSoftInputMode设置变为adjustResize，这样可能导致绝对定位的元素被键盘给顶起来。要解决这一问题你需要在AndroidManifest.xml中明确指定合适的windowSoftInputMode( https://developer.android.com/guide/topics/manifest/activity-element.html )值，或是自己监听事件来处理布局变化。

截图


属性
autoCapitalize enum('none', 'sentences', 'words', 'characters')

控制TextInput是否要自动将特定字符切换为大写：

characters: 所有的字符。
words: 每个单词的第一个字符。
sentences: 每句话的第一个字符（默认）。
none: 不自动切换任何字符为大写。
autoCorrect bool

如果为false，会关闭拼写自动修正。默认值是true。

autoFocus bool

如果为true，在componentDidMount后会获得焦点。默认值为false。

blurOnSubmit bool

如果为true，文本框会在提交的时候失焦。对于单行输入框默认值为true，多行则为false。注意：对于多行输入框来说，如果将blurOnSubmit设为true，则在按下回车键时就会失去焦点同时触发onSubmitEditing事件，而不会换行。

caretHidden bool

如果为true，则隐藏光标。默认值为false

defaultValue string

提供一个文本框中的初始值。当用户开始输入的时候，值就可以改变。

在一些简单的使用情形下，如果你不想用监听消息然后更新value属性的方法来保持属性和状态同步的时候，就可以用defaultValue来代替。

editable bool

如果为false，文本框是不可编辑的。默认值为true。

keyboardType enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')

决定弹出的何种软键盘的，譬如numeric（纯数字键盘）。

这些值在所有平台都可用：

default
numeric
email-address
maxLength number

限制文本框中最多的字符数。使用这个属性而不用JS逻辑去实现，可以避免闪烁的现象。

multiline bool

如果为true，文本框中可以输入多行文字。默认值为false。

onBlur function

当文本框失去焦点的时候调用此回调函数。

onChange function

当文本框内容变化时调用此回调函数。

onChangeText function

当文本框内容变化时调用此回调函数。改变后的文字内容会作为参数传递。

onEndEditing function

当文本输入结束后调用此回调函数。

onFocus function

当文本框获得焦点的时候调用此回调函数。

onLayout function

当组件挂载或者布局变化的时候调用，参数为{x, y, width, height}。

onScroll function

Invoked on content scroll with { nativeEvent: { contentOffset: { x, y } } }. May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.

onSelectionChange function

Callback that is called when the text input selection is changed. This will be called with { nativeEvent: { selection: { start, end } } }.

onSubmitEditing function

此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数。如果multiline={true}，此属性不可用。

placeholder string

如果没有任何文字输入，会显示此字符串。

placeholderTextColor color

占位字符串显示的文字颜色。

iosreturnKeyType enum('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo')

决定“确定”按钮显示的内容。 On Android you can also use returnKeyLabel.

Cross platform

The following values work across platforms:

done
go
next
search
send
Android Only

The following values work on Android only:

none
previous
iOS Only

The following values work on iOS only:

default
emergency-call
google
join
route
yahoo
secureTextEntry bool

如果为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为false。

selectTextOnFocus bool

如果为true，当获得焦点的时候，所有的文字都会被选中。

selection {start: number, end: number}

The start and end of the text input's selection. Set start and end to the same value to position the cursor.

selectionColor color

设置输入框高亮时的颜色（在iOS上还包括光标）

style Text#style

译注：这意味着本组件继承了所有Text的样式。

value string

文本框中的文字内容。

TextInput是一个受约束的(Controlled)的组件，意味着如果提供了value属性，原生值会被强制与value属性保持一致。在大部分情况下这都工作的很好，不过有些情况下会导致一些闪烁现象——一个常见的原因就是通过不改变value来阻止用户进行编辑。如果你希望阻止用户输入，可以考虑设置editable={false}；如果你是希望限制输入的长度，可以考虑设置maxLength属性，这两个属性都不会导致闪烁。

androiddisableFullscreenUI bool

When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone), the OS may choose to have the user edit the text inside of a full screen text input mode. When true, this feature is disabled and users will always edit the text directly inside of the text input. Defaults to false.

androidinlineImageLeft string

If defined, the provided image resource will be rendered on the left.

androidinlineImagePadding number

Padding between the inline image, if any, and the text input itself.

androidreturnKeyLabel string

Sets the return key to the label. Use it instead of returnKeyType.

androidtextBreakStrategy enum('simple', 'highQuality', 'balanced')

Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced The default value is simple.

iosclearButtonMode enum('never', 'while-editing', 'unless-editing', 'always')

是否要在文本框右侧显示“清除”按钮。

iosclearTextOnFocus bool

如果为true，每次开始输入的时候都会清除文本框的内容。

iosenablesReturnKeyAutomatically bool

如果为true，键盘会在文本框内没有文字的时候禁用确认按钮。默认值为false。

iosdataDetectorTypes enum('phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'), [object Object]

Determines the types of data converted to clickable URLs in the text input. Only valid if multiline={true} and editable={false}. By default no data types are detected.

You can provide one type or an array of many types.

Possible values for dataDetectorTypes are:

'phoneNumber'
'link'
'address'
'calendarEvent'
'none'
'all'
ioskeyboardAppearance enum('default', 'light', 'dark')

指定键盘的颜色。

iosonKeyPress function

当一个键被按下的时候调用此回调。传递给回调函数的参数为{ nativeEvent: { key: keyValue } }，其中keyValue即为被按下的键。会在onChange之前调用。

iosselectionState DocumentSelectionState

参见DocumentSelectionState.js，可以控制一个文档中哪段文字被选中的状态。

androidnumberOfLines number

设置输入框的行数。当multiline设置为true时使用它，可以占据对应的行数。

androidunderlineColorAndroid string

文本框的下划线颜色(译注：如果要去掉文本框的边框，请将此属性设为透明transparent)。

iosspellCheck bool

如果设置为false，则禁用拼写检查的样式（比如错误拼写的单词下的红线）。默认值继承自autoCorrect.

方法
isFocused(): boolean

返回值表明当前输入框是否获得了焦点。

clear()

清空输入框的内容。

例子
iOS

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  TextInput,
  View,
  StyleSheet,
} = ReactNative;

class WithLabel extends React.Component {
  render() {
    return (
      <View style={styles.labelContainer}>
        <View style={styles.label}>
          <Text>{this.props.label}</Text>
        </View>
        {this.props.children}
      </View>
    );
  }
}

class TextEventsExample extends React.Component {
  state = {
    curText: '<No Event>',
    prevText: '<No Event>',
    prev2Text: '<No Event>',
    prev3Text: '<No Event>',
  };

  updateText = (text) => {
    this.setState((state) => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
        prev3Text: state.prev2Text,
      };
    });
  };

  render() {
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter text to see events"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={(event) => this.updateText(
            'onChange text: ' + event.nativeEvent.text
          )}
          onEndEditing={(event) => this.updateText(
            'onEndEditing text: ' + event.nativeEvent.text
          )}
          onSubmitEditing={(event) => this.updateText(
            'onSubmitEditing text: ' + event.nativeEvent.text
          )}
          onSelectionChange={(event) => this.updateText(
            'onSelectionChange range: ' +
              event.nativeEvent.selection.start + ',' +
              event.nativeEvent.selection.end
          )}
          onKeyPress={(event) => {
            this.updateText('onKeyPress key: ' + event.nativeEvent.key);
          }}
          style={styles.default}
        />
        <Text style={styles.eventLabel}>
          {this.state.curText}{'\n'}
          (prev: {this.state.prevText}){'\n'}
          (prev2: {this.state.prev2Text}){'\n'}
          (prev3: {this.state.prev3Text})
        </Text>
      </View>
    );
  }
}

class AutoExpandingTextInput extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    this.state = {
      text: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.',
      height: 0,
    };
  }
  render() {
    return (
      <TextInput
        {...this.props}
        multiline={true}
        onChangeText={(text) => {
          this.setState({text});
        }}
        onContentSizeChange={(event) => {
          this.setState({height: event.nativeEvent.contentSize.height});
        }}
        style={[styles.default, {height: Math.max(35, this.state.height)}]}
        value={this.state.text}
      />
    );
  }
}

class RewriteExample extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    var limit = 20;
    var remainder = limit - this.state.text.length;
    var remainderColor = remainder > 5 ? 'blue' : 'red';
    return (
      <View style={styles.rewriteContainer}>
        <TextInput
          multiline={false}
          maxLength={limit}
          onChangeText={(text) => {
            text = text.replace(/ /g, '_');
            this.setState({text});
          }}
          style={styles.default}
          value={this.state.text}
        />
        <Text style={[styles.remainder, {color: remainderColor}]}>
          {remainder}
        </Text>
      </View>
    );
  }
}

class RewriteExampleInvalidCharacters extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.rewriteContainer}>
        <TextInput
          multiline={false}
          onChangeText={(text) => {
            this.setState({text: text.replace(/\s/g, '')});
          }}
          style={styles.default}
          value={this.state.text}
        />
      </View>
    );
  }
}

class TokenizedTextExample extends React.Component {
  state: any;

  constructor(props) {
    super(props);
    this.state = {text: 'Hello #World'};
  }
  render() {

    //define delimiter
    let delimiter = /\s+/;

    //split string
    let _text = this.state.text;
    let token, index, parts = [];
    while (_text) {
      delimiter.lastIndex = 0;
      token = delimiter.exec(_text);
      if (token === null) {
        break;
      }
      index = token.index;
      if (token[0].length === 0) {
        index = 1;
      }
      parts.push(_text.substr(0, index));
      parts.push(token[0]);
      index = index + token[0].length;
      _text = _text.slice(index);
    }
    parts.push(_text);

    //highlight hashtags
    parts = parts.map((text) => {
      if (/^#/.test(text)) {
        return <Text key={text} style={styles.hashtag}>{text}</Text>;
      } else {
        return text;
      }
    });

    return (
      <View>
        <TextInput
          multiline={true}
          style={styles.multiline}
          onChangeText={(text) => {
            this.setState({text});
          }}>
          <Text>{parts}</Text>
        </TextInput>
      </View>
    );
  }
}

class BlurOnSubmitExample extends React.Component {
  focusNextField = (nextField) => {
    this.refs[nextField].focus();
  };

  render() {
    return (
      <View>
        <TextInput
          ref="1"
          style={styles.default}
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('2')}
        />
        <TextInput
          ref="2"
          style={styles.default}
          keyboardType="email-address"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('3')}
        />
        <TextInput
          ref="3"
          style={styles.default}
          keyboardType="url"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('4')}
        />
        <TextInput
          ref="4"
          style={styles.default}
          keyboardType="numeric"
          placeholder="blurOnSubmit = false"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('5')}
        />
        <TextInput
          ref="5"
          style={styles.default}
          keyboardType="numbers-and-punctuation"
          placeholder="blurOnSubmit = true"
          returnKeyType="done"
        />
      </View>
    );
  }
}

type SelectionExampleState = {
  selection: {
    start: number;
    end?: number;
  };
  value: string;
};

class SelectionExample extends React.Component {
  state: SelectionExampleState;

  _textInput: any;

  constructor(props) {
    super(props);
    this.state = {
      selection: {start: 0, end: 0},
      value: props.value
    };
  }

  onSelectionChange({nativeEvent: {selection}}) {
    this.setState({selection});
  }

  getRandomPosition() {
    var length = this.state.value.length;
    return Math.round(Math.random() * length);
  }

  select(start, end) {
    this._textInput.focus();
    this.setState({selection: {start, end}});
  }

  selectRandom() {
    var positions = [this.getRandomPosition(), this.getRandomPosition()].sort();
    this.select(...positions);
  }

  placeAt(position) {
    this.select(position, position);
  }

  placeAtRandom() {
    this.placeAt(this.getRandomPosition());
  }

  render() {
    var length = this.state.value.length;

    return (
      <View>
        <TextInput
          multiline={this.props.multiline}
          onChangeText={(value) => this.setState({value})}
          onSelectionChange={this.onSelectionChange.bind(this)}
          ref={textInput => (this._textInput = textInput)}
          selection={this.state.selection}
          style={this.props.style}
          value={this.state.value}
        />
        <View>
          <Text>
            selection = {JSON.stringify(this.state.selection)}
          </Text>
          <Text onPress={this.placeAt.bind(this, 0)}>
            Place at Start (0, 0)
          </Text>
          <Text onPress={this.placeAt.bind(this, length)}>
            Place at End ({length}, {length})
          </Text>
          <Text onPress={this.placeAtRandom.bind(this)}>
            Place at Random
          </Text>
          <Text onPress={this.select.bind(this, 0, length)}>
            Select All
          </Text>
          <Text onPress={this.selectRandom.bind(this)}>
            Select Random
          </Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  page: {
    paddingBottom: 300,
  },
  default: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
  },
  multiline: {
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    height: 50,
    padding: 4,
    marginBottom: 4,
  },
  multilineWithFontStyles: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Cochin',
    height: 60,
  },
  multilineChild: {
    width: 50,
    height: 40,
    position: 'absolute',
    right: 5,
    backgroundColor: 'red',
  },
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    flex: 1,
  },
  label: {
    width: 115,
    alignItems: 'flex-end',
    marginRight: 10,
    paddingTop: 2,
  },
  rewriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remainder: {
    textAlign: 'right',
    width: 24,
  },
  hashtag: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

exports.displayName = (undefined: ?string);
exports.title = '<TextInput>';
exports.description = 'Single and multi-line text inputs.';
exports.examples = [
  {
    title: 'Auto-focus',
    render: function() {
      return (
        <TextInput
          autoFocus={true}
          style={styles.default}
          accessibilityLabel="I am the accessibility label for text input"
        />
      );
    }
  },
  {
    title: "Live Re-Write (<sp>  ->  '_') + maxLength",
    render: function() {
      return <RewriteExample />;
    }
  },
  {
    title: 'Live Re-Write (no spaces allowed)',
    render: function() {
      return <RewriteExampleInvalidCharacters />;
    }
  },
  {
    title: 'Auto-capitalize',
    render: function() {
      return (
        <View>
          <WithLabel label="none">
            <TextInput
              autoCapitalize="none"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="sentences">
            <TextInput
              autoCapitalize="sentences"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="words">
            <TextInput
              autoCapitalize="words"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="characters">
            <TextInput
              autoCapitalize="characters"
              style={styles.default}
            />
          </WithLabel>
        </View>
      );
    }
  },
  {
    title: 'Auto-correct',
    render: function() {
      return (
        <View>
          <WithLabel label="true">
            <TextInput autoCorrect={true} style={styles.default} />
          </WithLabel>
          <WithLabel label="false">
            <TextInput autoCorrect={false} style={styles.default} />
          </WithLabel>
        </View>
      );
    }
  },
  {
    title: 'Keyboard types',
    render: function() {
      var keyboardTypes = [
        'default',
        'ascii-capable',
        'numbers-and-punctuation',
        'url',
        'number-pad',
        'phone-pad',
        'name-phone-pad',
        'email-address',
        'decimal-pad',
        'twitter',
        'web-search',
        'numeric',
      ];
      var examples = keyboardTypes.map((type) => {
        return (
          <WithLabel key={type} label={type}>
            <TextInput
              keyboardType={type}
              style={styles.default}
            />
          </WithLabel>
        );
      });
      return <View>{examples}</View>;
    }
  },
  {
    title: 'Keyboard appearance',
    render: function() {
      var keyboardAppearance = [
        'default',
        'light',
        'dark',
      ];
      var examples = keyboardAppearance.map((type) => {
        return (
          <WithLabel key={type} label={type}>
            <TextInput
              keyboardAppearance={type}
              style={styles.default}
            />
          </WithLabel>
        );
      });
      return <View>{examples}</View>;
    }
  },
  {
    title: 'Return key types',
    render: function() {
      var returnKeyTypes = [
        'default',
        'go',
        'google',
        'join',
        'next',
        'route',
        'search',
        'send',
        'yahoo',
        'done',
        'emergency-call',
      ];
      var examples = returnKeyTypes.map((type) => {
        return (
          <WithLabel key={type} label={type}>
            <TextInput
              returnKeyType={type}
              style={styles.default}
            />
          </WithLabel>
        );
      });
      return <View>{examples}</View>;
    }
  },
  {
    title: 'Enable return key automatically',
    render: function() {
      return (
        <View>
          <WithLabel label="true">
            <TextInput enablesReturnKeyAutomatically={true} style={styles.default} />
          </WithLabel>
        </View>
      );
    }
  },
  {
    title: 'Secure text entry',
    render: function() {
      return (
        <View>
          <WithLabel label="true">
            <TextInput secureTextEntry={true} style={styles.default} defaultValue="abc" />
          </WithLabel>
        </View>
      );
    }
  },
  {
    title: 'Event handling',
    render: function(): React.Element<any> { return <TextEventsExample />; },
  },
  {
    title: 'Colored input text',
    render: function() {
      return (
        <View>
          <TextInput
            style={[styles.default, {color: 'blue'}]}
            defaultValue="Blue"
          />
          <TextInput
            style={[styles.default, {color: 'green'}]}
            defaultValue="Green"
          />
        </View>
      );
    }
  },
  {
    title: 'Colored highlight/cursor for text input',
    render: function() {
      return (
        <View>
          <TextInput
            style={styles.default}
            selectionColor={"green"}
            defaultValue="Highlight me"
          />
          <TextInput
            style={styles.default}
            selectionColor={"rgba(86, 76, 205, 1)"}
            defaultValue="Highlight me"
          />
        </View>
      );
    }
  },
  {
    title: 'Clear button mode',
    render: function () {
      return (
        <View>
          <WithLabel label="never">
            <TextInput
              style={styles.default}
              clearButtonMode="never"
            />
          </WithLabel>
          <WithLabel label="while editing">
            <TextInput
              style={styles.default}
              clearButtonMode="while-editing"
            />
          </WithLabel>
          <WithLabel label="unless editing">
            <TextInput
              style={styles.default}
              clearButtonMode="unless-editing"
            />
          </WithLabel>
          <WithLabel label="always">
            <TextInput
              style={styles.default}
              clearButtonMode="always"
            />
          </WithLabel>
        </View>
      );
    }
  },
  {
    title: 'Clear and select',
    render: function() {
      return (
        <View>
          <WithLabel label="clearTextOnFocus">
            <TextInput
              placeholder="text is cleared on focus"
              defaultValue="text is cleared on focus"
              style={styles.default}
              clearTextOnFocus={true}
            />
          </WithLabel>
          <WithLabel label="selectTextOnFocus">
            <TextInput
              placeholder="text is selected on focus"
              defaultValue="text is selected on focus"
              style={styles.default}
              selectTextOnFocus={true}
            />
          </WithLabel>
        </View>
      );
    }
  },
  {
    title: 'Blur on submit',
    render: function(): React.Element<any> { return <BlurOnSubmitExample />; },
  },
  {
    title: 'Multiline blur on submit',
    render: function() {
      return (
        <View>
          <TextInput
            style={styles.multiline}
            placeholder="blurOnSubmit = true"
            returnKeyType="next"
            blurOnSubmit={true}
            multiline={true}
            onSubmitEditing={event => alert(event.nativeEvent.text)}
          />
        </View>
      );
    }
  },
  {
    title: 'Multiline',
    render: function() {
      return (
        <View>
          <TextInput
            placeholder="multiline text input"
            multiline={true}
            style={styles.multiline}
          />
          <TextInput
            placeholder="multiline text input with font styles and placeholder"
            multiline={true}
            clearTextOnFocus={true}
            autoCorrect={true}
            autoCapitalize="words"
            placeholderTextColor="red"
            keyboardType="url"
            style={[styles.multiline, styles.multilineWithFontStyles]}
          />
          <TextInput
            placeholder="multiline text input with max length"
            maxLength={5}
            multiline={true}
            style={styles.multiline}
          />
          <TextInput
            placeholder="uneditable multiline text input"
            editable={false}
            multiline={true}
            style={styles.multiline}
          />
          <TextInput
            defaultValue="uneditable multiline text input with phone number detection: 88888888."
            editable={false}
            multiline={true}
            style={styles.multiline}
            dataDetectorTypes="phoneNumber"
          />
          <TextInput
            placeholder="multiline with children"
            multiline={true}
            enablesReturnKeyAutomatically={true}
            returnKeyType="go"
            style={styles.multiline}>
            <View style={styles.multilineChild}/>
          </TextInput>
        </View>
      );
    }
  },
  {
    title: 'Auto-expanding',
    render: function() {
      return (
        <View>
          <AutoExpandingTextInput
            placeholder="height increases with content"
            enablesReturnKeyAutomatically={true}
            returnKeyType="default"
          />
        </View>
      );
    }
  },
  {
    title: 'Attributed text',
    render: function() {
      return <TokenizedTextExample />;
    }
  },
  {
    title: 'Text selection & cursor placement',
    render: function() {
      return (
        <View>
          <SelectionExample
            style={styles.default}
            value="text selection can be changed"
          />
          <SelectionExample
            multiline
            style={styles.multiline}
            value={"multiline text selection\ncan also be changed"}
          />
        </View>
      );
    }
  },
  {
    title: 'TextInput maxLength',
    render: function() {
      return (
        <View>
          <WithLabel label="maxLength: 5">
            <TextInput
              maxLength={5}
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="maxLength: 5 with placeholder">
            <TextInput
              maxLength={5}
              placeholder="ZIP code entry"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="maxLength: 5 with default value already set">
            <TextInput
              maxLength={5}
              defaultValue="94025"
              style={styles.default}
            />
          </WithLabel>
          <WithLabel label="maxLength: 5 with very long default value already set">
            <TextInput
              maxLength={5}
              defaultValue="9402512345"
              style={styles.default}
            />
          </WithLabel>
        </View>
      );
    }
  },
];
Android

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  TextInput,
  View,
  StyleSheet,
} = ReactNative;

class TextEventsExample extends React.Component {
  state = {
    curText: '<No Event>',
    prevText: '<No Event>',
    prev2Text: '<No Event>',
  };

  updateText = (text) => {
    this.setState((state) => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
      };
    });
  };

  render() {
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          placeholder="Enter text to see events"
          autoCorrect={false}
          onFocus={() => this.updateText('onFocus')}
          onBlur={() => this.updateText('onBlur')}
          onChange={(event) => this.updateText(
            'onChange text: ' + event.nativeEvent.text
          )}
          onEndEditing={(event) => this.updateText(
            'onEndEditing text: ' + event.nativeEvent.text
          )}
          onSubmitEditing={(event) => this.updateText(
            'onSubmitEditing text: ' + event.nativeEvent.text
          )}
          style={styles.singleLine}
        />
        <Text style={styles.eventLabel}>
          {this.state.curText}{'\n'}
          (prev: {this.state.prevText}){'\n'}
          (prev2: {this.state.prev2Text})
        </Text>
      </View>
    );
  }
}

class AutoExpandingTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'React Native enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. The focus of React Native is on developer efficiency across all the platforms you care about — learn once, write anywhere. Facebook uses React Native in multiple production apps and will continue investing in React Native.',
      height: 0,
    };
  }
  render() {
    return (
      <TextInput
        {...this.props}
        multiline={true}
        onContentSizeChange={(event) => {
          this.setState({height: event.nativeEvent.contentSize.height});
        }}
        onChangeText={(text) => {
          this.setState({text});
        }}
        style={[styles.default, {height: Math.max(35, this.state.height)}]}
        value={this.state.text}
      />
    );
  }
}

class RewriteExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    var limit = 20;
    var remainder = limit - this.state.text.length;
    var remainderColor = remainder > 5 ? 'blue' : 'red';
    return (
      <View style={styles.rewriteContainer}>
        <TextInput
          multiline={false}
          maxLength={limit}
          onChangeText={(text) => {
            text = text.replace(/ /g, '_');
            this.setState({text});
          }}
          style={styles.default}
          value={this.state.text}
        />
        <Text style={[styles.remainder, {color: remainderColor}]}>
          {remainder}
        </Text>
      </View>
    );
  }
}

class TokenizedTextExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Hello #World'};
  }
  render() {

    //define delimiter
    let delimiter = /\s+/;

    //split string
    let _text = this.state.text;
    let token, index, parts = [];
    while (_text) {
      delimiter.lastIndex = 0;
      token = delimiter.exec(_text);
      if (token === null) {
        break;
      }
      index = token.index;
      if (token[0].length === 0) {
        index = 1;
      }
      parts.push(_text.substr(0, index));
      parts.push(token[0]);
      index = index + token[0].length;
      _text = _text.slice(index);
    }
    parts.push(_text);

    //highlight hashtags
    parts = parts.map((text) => {
      if (/^#/.test(text)) {
        return <Text key={text} style={styles.hashtag}>{text}</Text>;
      } else {
        return text;
      }
    });

    return (
      <View>
        <TextInput
          multiline={true}
          style={styles.multiline}
          onChangeText={(text) => {
            this.setState({text});
          }}>
          <Text>{parts}</Text>
        </TextInput>
      </View>
    );
  }
}

class BlurOnSubmitExample extends React.Component {
  focusNextField = (nextField) => {
    this.refs[nextField].focus();
  };

  render() {
    return (
      <View>
        <TextInput
          ref="1"
          style={styles.singleLine}
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('2')}
        />
        <TextInput
          ref="2"
          style={styles.singleLine}
          keyboardType="email-address"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('3')}
        />
        <TextInput
          ref="3"
          style={styles.singleLine}
          keyboardType="url"
          placeholder="blurOnSubmit = false"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('4')}
        />
        <TextInput
          ref="4"
          style={styles.singleLine}
          keyboardType="numeric"
          placeholder="blurOnSubmit = false"
          blurOnSubmit={false}
          onSubmitEditing={() => this.focusNextField('5')}
        />
        <TextInput
          ref="5"
          style={styles.singleLine}
          keyboardType="numbers-and-punctuation"
          placeholder="blurOnSubmit = true"
          returnKeyType="done"
        />
      </View>
    );
  }
}

class ToggleDefaultPaddingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasPadding: false};
  }
  render() {
    return (
      <View>
        <TextInput style={this.state.hasPadding ? { padding: 0 } : null}/>
        <Text onPress={() => this.setState({hasPadding: !this.state.hasPadding})}>
          Toggle padding
        </Text>
      </View>
    );
  }
}

type SelectionExampleState = {
  selection: {
    start: number;
    end: number;
  };
  value: string;
};

class SelectionExample extends React.Component {
  state: SelectionExampleState;

  _textInput: any;

  constructor(props) {
    super(props);
    this.state = {
      selection: {start: 0, end: 0},
      value: props.value
    };
  }

  onSelectionChange({nativeEvent: {selection}}) {
    this.setState({selection});
  }

  getRandomPosition() {
    var length = this.state.value.length;
    return Math.round(Math.random() * length);
  }

  select(start, end) {
    this._textInput.focus();
    this.setState({selection: {start, end}});
  }

  selectRandom() {
    var positions = [this.getRandomPosition(), this.getRandomPosition()].sort();
    this.select(...positions);
  }

  placeAt(position) {
    this.select(position, position);
  }

  placeAtRandom() {
    this.placeAt(this.getRandomPosition());
  }

  render() {
    var length = this.state.value.length;

    return (
      <View>
        <TextInput
          multiline={this.props.multiline}
          onChangeText={(value) => this.setState({value})}
          onSelectionChange={this.onSelectionChange.bind(this)}
          ref={textInput => (this._textInput = textInput)}
          selection={this.state.selection}
          style={this.props.style}
          value={this.state.value}
        />
        <View>
          <Text>
            selection = {JSON.stringify(this.state.selection)}
          </Text>
          <Text onPress={this.placeAt.bind(this, 0)}>
            Place at Start (0, 0)
          </Text>
          <Text onPress={this.placeAt.bind(this, length)}>
            Place at End ({length}, {length})
          </Text>
          <Text onPress={this.placeAtRandom.bind(this)}>
            Place at Random
          </Text>
          <Text onPress={this.select.bind(this, 0, length)}>
            Select All
          </Text>
          <Text onPress={this.selectRandom.bind(this)}>
            Select Random
          </Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  multiline: {
    height: 60,
    fontSize: 16,
    padding: 4,
    marginBottom: 10,
  },
  eventLabel: {
    margin: 3,
    fontSize: 12,
  },
  singleLine: {
    fontSize: 16,
    padding: 4,
  },
  singleLineWithHeightTextInput: {
    height: 30,
  },
  hashtag: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

exports.title = '<TextInput>';
exports.description = 'Single and multi-line text inputs.';
exports.examples = [
  {
    title: 'Auto-focus',
    render: function() {
      return (
        <TextInput
          autoFocus={true}
          style={styles.singleLine}
          accessibilityLabel="I am the accessibility label for text input"
        />
      );
    }
  },
  {
    title: "Live Re-Write (<sp>  ->  '_')",
    render: function() {
      return <RewriteExample />;
    }
  },
  {
    title: 'Auto-capitalize',
    render: function() {
      var autoCapitalizeTypes = [
        'none',
        'sentences',
        'words',
        'characters',
      ];
      var examples = autoCapitalizeTypes.map((type) => {
        return (
          <TextInput
            key={type}
            autoCapitalize={type}
            placeholder={'autoCapitalize: ' + type}
            style={styles.singleLine}
          />
        );
      });
      return <View>{examples}</View>;
    }
  },
  {
    title: 'Auto-correct',
    render: function() {
      return (
        <View>
          <TextInput
            autoCorrect={true}
            placeholder="This has autoCorrect"
            style={styles.singleLine}
          />
          <TextInput
            autoCorrect={false}
            placeholder="This does not have autoCorrect"
            style={styles.singleLine}
          />
        </View>
      );
    }
  },
  {
    title: 'Keyboard types',
    render: function() {
      var keyboardTypes = [
        'default',
        'email-address',
        'numeric',
        'phone-pad',
      ];
      var examples = keyboardTypes.map((type) => {
        return (
          <TextInput
            key={type}
            keyboardType={type}
            placeholder={'keyboardType: ' + type}
            style={styles.singleLine}
          />
        );
      });
      return <View>{examples}</View>;
    }
  },
  {
    title: 'Blur on submit',
    render: function(): React.Element { return <BlurOnSubmitExample />; },
  },
  {
    title: 'Event handling',
    render: function(): React.Element { return <TextEventsExample />; },
  },
  {
    title: 'Colors and text inputs',
    render: function() {
      return (
        <View>
          <TextInput
            style={[styles.singleLine]}
            defaultValue="Default color text"
          />
          <TextInput
            style={[styles.singleLine, {color: 'green'}]}
            defaultValue="Green Text"
          />
          <TextInput
            placeholder="Default placeholder text color"
            style={styles.singleLine}
          />
          <TextInput
            placeholder="Red placeholder text color"
            placeholderTextColor="red"
            style={styles.singleLine}
          />
          <TextInput
            placeholder="Default underline color"
            style={styles.singleLine}
          />
          <TextInput
            placeholder="Blue underline color"
            style={styles.singleLine}
            underlineColorAndroid="blue"
          />
          <TextInput
            defaultValue="Same BackgroundColor as View "
            style={[styles.singleLine, {backgroundColor: 'rgba(100, 100, 100, 0.3)'}]}>
            <Text style={{backgroundColor: 'rgba(100, 100, 100, 0.3)'}}>
              Darker backgroundColor
            </Text>
          </TextInput>
          <TextInput
            defaultValue="Highlight Color is red"
            selectionColor={'red'}
            style={styles.singleLine}>
          </TextInput>
        </View>
      );
    }
  },
  {
    title: 'Text input, themes and heights',
    render: function() {
      return (
        <TextInput
          placeholder="If you set height, beware of padding set from themes"
          style={[styles.singleLineWithHeightTextInput]}
        />
      );
    }
  },
  {
    title: 'fontFamily, fontWeight and fontStyle',
    render: function() {
      return (
        <View>
          <TextInput
            style={[styles.singleLine, {fontFamily: 'sans-serif'}]}
            placeholder="Custom fonts like Sans-Serif are supported"
          />
          <TextInput
            style={[styles.singleLine, {fontFamily: 'sans-serif', fontWeight: 'bold'}]}
            placeholder="Sans-Serif bold"
          />
          <TextInput
            style={[styles.singleLine, {fontFamily: 'sans-serif', fontStyle: 'italic'}]}
            placeholder="Sans-Serif italic"
          />
          <TextInput
            style={[styles.singleLine, {fontFamily: 'serif'}]}
            placeholder="Serif"
          />
        </View>
      );
    }
  },
  {
    title: 'Passwords',
    render: function() {
      return (
        <View>
          <TextInput
            defaultValue="iloveturtles"
            secureTextEntry={true}
            style={styles.singleLine}
          />
          <TextInput
            secureTextEntry={true}
            style={[styles.singleLine, {color: 'red'}]}
            placeholder="color is supported too"
            placeholderTextColor="red"
          />
        </View>
      );
    }
  },
  {
    title: 'Editable',
    render: function() {
      return (
        <TextInput
           defaultValue="Can't touch this! (>'-')> ^(' - ')^ <('-'<) (>'-')> ^(' - ')^"
           editable={false}
           style={styles.singleLine}
         />
      );
    }
  },
  {
    title: 'Multiline',
    render: function() {
      return (
        <View>
          <TextInput
            autoCorrect={true}
            placeholder="multiline, aligned top-left"
            placeholderTextColor="red"
            multiline={true}
            style={[styles.multiline, {textAlign: 'left', textAlignVertical: 'top'}]}
          />
          <TextInput
            autoCorrect={true}
            placeholder="multiline, aligned center"
            placeholderTextColor="green"
            multiline={true}
            style={[styles.multiline, {textAlign: 'center', textAlignVertical: 'center'}]}
          />
          <TextInput
            autoCorrect={true}
            multiline={true}
            style={[styles.multiline, {color: 'blue'}, {textAlign: 'right', textAlignVertical: 'bottom'}]}>
            <Text style={styles.multiline}>multiline with children, aligned bottom-right</Text>
          </TextInput>
        </View>
      );
    }
  },
  {
    title: 'Fixed number of lines',
    platform: 'android',
    render: function() {
      return (
        <View>
          <TextInput numberOfLines={2}
            multiline={true}
            placeholder="Two line input"
          />
          <TextInput numberOfLines={5}
            multiline={true}
            placeholder="Five line input"
          />
        </View>
      );
    }
  },
  {
    title: 'Auto-expanding',
    render: function() {
      return (
        <View>
          <AutoExpandingTextInput
            placeholder="height increases with content"
            enablesReturnKeyAutomatically={true}
            returnKeyType="done"
          />
        </View>
      );
    }
  },
  {
    title: 'Attributed text',
    render: function() {
      return <TokenizedTextExample />;
    }
  },
  {
    title: 'Return key',
    render: function() {
      var returnKeyTypes = [
        'none',
        'go',
        'search',
        'send',
        'done',
        'previous',
        'next',
      ];
      var returnKeyLabels = [
        'Compile',
        'React Native',
      ];
      var examples = returnKeyTypes.map((type) => {
        return (
          <TextInput
            key={type}
            returnKeyType={type}
            placeholder={'returnKeyType: ' + type}
            style={styles.singleLine}
          />
        );
      });
      var types = returnKeyLabels.map((type) => {
        return (
          <TextInput
            key={type}
            returnKeyLabel={type}
            placeholder={'returnKeyLabel: ' + type}
            style={styles.singleLine}
          />
        );
      });
      return <View>{examples}{types}</View>;
    }
  },
  {
    title: 'Inline Images',
    render: function() {
      return (
        <View>
          <TextInput
            inlineImageLeft="ic_menu_black_24dp"
            placeholder="This has drawableLeft set"
            style={styles.singleLine}
          />
          <TextInput
            inlineImageLeft="ic_menu_black_24dp"
            inlineImagePadding={30}
            placeholder="This has drawableLeft and drawablePadding set"
            style={styles.singleLine}
          />
          <TextInput
            placeholder="This does not have drawable props set"
            style={styles.singleLine}
          />
        </View>
      );
    }
  },
  {
    title: 'Toggle Default Padding',
    render: function(): React.Element { return <ToggleDefaultPaddingExample />; },
  },
  {
    title: 'Text selection & cursor placement',
    render: function() {
      return (
        <View>
          <SelectionExample
            style={styles.default}
            value="text selection can be changed"
          />
          <SelectionExample
            multiline
            style={styles.multiline}
            value={"multiline text selection\ncan also be changed"}
          />
        </View>
      );
    }
  },
];
前一篇：Text后一篇：ToolbarAndroid
听晴明老师从头讲React Native
入门基础
搭建开发环境
编写Hello World
Props（属性）
State（状态）
样式
高度与宽度
使用Flexbox布局
处理文本输入
如何使用ScrollView
如何使用ListView
网络
其他参考资源
进阶指南
嵌入到现有原生应用
颜色
图片
处理触摸事件
动画
无障碍功能
定时器
直接操作
调试
自动化测试
JavaScript环境
导航器对比
性能
升级
特定平台代码
手势响应系统
社区资源
中文视频教程
js.coach第三方组件库
中文论坛组件分享区
中文论坛问题求助区
使用指南(iOS)
原生模块
原生UI组件
链接原生库
在设备上运行
在模拟器上运行
在原生和React Native间通信
使用指南(Android)
原生模块
原生UI组件
Headless JS（后台任务）
在设备上运行
打包APK
调试Android UI性能
从源代码编译React Native
组件
ActivityIndicator
Button
DatePickerIOS
DrawerLayoutAndroid
Image
KeyboardAvoidingView
ListView
ListView.DataSource
MapView
Modal
Navigator
NavigatorIOS
Picker
PickerIOS
ProgressBarAndroid
ProgressViewIOS
RefreshControl
ScrollView
SegmentedControlIOS
Slider
StatusBar
Switch
TabBarIOS
TabBarIOS.Item
Text
TextInput
ToolbarAndroid
TouchableHighlight
TouchableNativeFeedback
TouchableOpacity
TouchableWithoutFeedback
View
ViewPagerAndroid
WebView
API
ActionSheetIOS
AdSupportIOS
Alert
AlertIOS
Animated
AppRegistry
AppState
AsyncStorage
BackAndroid
CameraRoll
Clipboard
DatePickerAndroid
Dimensions
Easing
Geolocation
ImageEditor
ImagePickerIOS
ImageStore
InteractionManager
Keyboard
LayoutAnimation
Linking
NativeMethodsMixin
NetInfo
PanResponder
PermissionsAndroid
PixelRatio
PushNotificationIOS
Share
StyleSheet
Systrace
TimePickerAndroid
ToastAndroid
Vibration
布局样式属性
阴影样式属性
React Native中文网.

© 2017 杭州欧石南网络科技有限公司

浙ICP备15023664号-3

浙公网安备 33010602005511号浙公网安备 33010602005511号
DeviceEventEmitter
forEach
replace
PureComponent
InteractionManager
evt是一个合成事件，它包含以下结构：
require
nativeEvent
changedTouches - 在上一次事件之后，所有发生变化的触摸事件的数组集合（即上一次事件后，所有移动过的触摸点）
identifier - 触摸点的ID
locationX - 触摸点相对于父元素的横坐标
locationY - 触摸点相对于父元素的纵坐标
pageX - 触摸点相对于根元素的横坐标
pageY - 触摸点相对于根元素的纵坐标
target - 触摸点所在的元素ID
timestamp - 触摸事件的时间戳，可用于移动速度的计算
touches - 当前屏幕上的所有触摸点的集合
推酷
文章
站点
主题
活动
APP 荐
周刊
更多

搜索
登录
React Native Animated 动画详解 - 实例篇 (这篇就够了)
时间 2016-06-26 09:02:35  公众账号
原文  http://mp.weixin.qq.com/s?__biz=MzA4OTc4MTM0OA==&mid=2650358193&idx=1&sn=2f8bd640476df0659d9966f562ab03e0#rd
主题 React Native
阅读本文大约需要5分钟

之前已经更新过Animated动画基础篇相关知识点,今天讲解Animated.Value,Animated.ValueXY以及相关动画库使用实例。学习完本篇相信大家对于动画库的基本使用应该是没有问题了。

React Native进阶之Animated动画库详解

本文所讲知识点

Animated基本内容

Animated.Value

Animated.ValuxXY

Animated库使用实例

前言
上一篇我们已经主要把Animated动画库模块相关内容基础知识点的内容大体的讲解了一篇，但是主要是讲内容，没有讲解具体怎么样使用，所以肯定有很多人会感觉晕晕的~那么今天进行讲解一下该库的一些具体使用实例。

基本内容
2.1.Animated.Value介绍

最基本的一个动画使用方式是创建一个Animated.Value,将该动画绑定到一个或者多个样式属性到动画组件中，然后通过开启动画运行。例如Animated.timing，或者采用Animated.event绑定到拖动或者滚动的手势中。除了绑定到样式中，Animated.Value也可以绑定到属性中(props)，同样也可以加入插值动画。下面一个很简单的例子进行演示视图在加载的时候淡入显示:
大家请注意，只有声明了可以进行动画设置的组件才能有动画效果，例如:View,Text和Image这三个组件都可以提供动画效果。当然了，如果大家看过之前的Animated基础篇的童鞋可以也了解到，我们同样可以采用createAnimatedComponent方法创建一个可以有动画效果的自定义组件。这些特殊的组件可以绑定动画值到属性中，然后每一帧通过原生的方法去刷新。这样可以避免每次都去渲染或者同步过程中的开销。同时这些组件默认在卸载的时候会做一下释放清理工作已达到安全的使用。

动画库具备很强大可配置性，例如可以配置自定义或者预先定义的过渡方法，延迟加载，动画时间，衰减幅度，弹跳度等根据动画类型不同配置可用的属性参数。

一个Animated.Value可以绑定驱动任何数量的动画属性，并且每一个属性可以通过插值函数来运行。插值通过两个区间进行映射，通过我们一般使用一个线性的插值函数，但是也可以使用其他的过渡函数。默认情况下，该当输入的区间超过范围时候，该也会进行相应的转换工作，不过我们可以设置把输出设置在一个可约束的范围之内。

下面我们来看一个实例，我们需要通过Animated.Value的值从0变化到1，组件的位置从150px移动到0px，同时透明度从0变化到1。我们可以非常方便的修改style就可以实现。如下代码: 看过之前的基础的童鞋知道，动画还可以进行通过各种方式进行组合形成比较复杂的动画。主要是通过sequence和parallel方法。同时可以通过把toValue设置成另外的Animated.Value来产生一个动画序列效果。

2.2.Animated.ValueXY介绍

Animated.ValueXY可以用来处理一些2D动画效果，例如滑动。当然还有一些其他的方法setOffset和getLayout可以用来帮助实现一些交互的动作，例如:拖拽操作。大家可以查看官方写的AnimationExample.js文件查看更多的使用例子。

[注意].Animated是被设计成可以完成序列化的，这样可以脱离常规的JavaScript的事件循环，以一种高效性能的方式运行。所以整体设计出来的API可能和同步的系统动画相比有点奇怪。不过我们可以使用Animated.Value.addListener进行监听动画执行过来中的一些状态，不过在使用过程中需要注意一下性能问题，尤其在以后的版本中使用。

2.3.基本使用方法

decay(value,config) 静态方法,传入一个初始速度值以及衰减值。动画从初始速度慢慢衰减到0.

timing(value,config)静态方法,该动画传入一个值，根据过渡曲线函数变化。Easing模块已经定义很多不同的过渡曲线方法，当然也可以自己自定义

spring(value,config)静态方法,创建一个基于Rebound和Origami实现的Spring动画。该值会将当前动画运行的状态值自动更新到toValue属性中，以确保动画的连贯性。可以链式调用。

add(a,b)  静态方法,将两个动画值相加，创建一个新的动画值。

multiply(a,b) 静态方法,将两个动画值进行相乘，创建一个新的动画值

modulo(a,modulus) 静态方法，进行对参数一的动画值取模(非负值)，创建一个新的动画值

delay(time)  静态方法，在给定的延迟时间之后执行动画

sequence(animations) 静态方法，该按照顺序执行一组动画，该需要等待一个动画完成以后才会继续执行下一个动画。如果当前的动画被打断终止了，那么就不会执行后边的动画了。

parallel(animations,config?)  静态方法，同时执行一组动画，默认情况下，如果其中有任一动画被终止了，那么其余的动画也会被停止。不过我们可以通过stopTogether来改变设置。

stagger(time,animations) 静态方法，执行一组动画，有可能里边的动画是同时执行。不过会有指定时间的延迟。

event(argMapping,config?) 静态方法  响应事件值，如下看一下使用方法


createAnimatedComponent(Component) 静态方法 ，使得任何React的组件都可以设置动画效果，例如创建Animated.View等等

2.4.基本属性

Value:AnimatedValue   数值的类，用于动画效果。通常我们使用new Animated.Value(0)，进行初始化动画

ValueXY:AnimatedValueXY  来用实现2D动画效果，例如拖拽操作等

AnimatedValue类

该值用来驱动动画执行，一个Animated.Value可以用一种顺序的方法进行执行多种属性，不过在同一时间只能执行一种效果。通过开启一个新的动画或者调用setValue方法会停止之前任何的动画然后开始新的动画效果。

3.1.重要方法

constructor(value)  构造方法，初始化一个值

setValue(value)   直接设置动画值，该会停止任何正在进行中的动画，然后更新所有绑定的属性

setOffset(value)  设置偏移量，接下来无论使用setValue,一个动画或者Animated.event，都会加上这个值。常用在手势拖动操作中。

flattenOffset()   该用来把相对值合并到值里，然后相对值设置为0，最终输出的值不会发生变化。常常在拖动操作结束以后调用。

addListener(callback)  添加监听器，用于监听动画执行过程中的值的变化。

removeListener(id)   删除指定的监听器

removeAllListeners()  删除所有的监听器

stopAnimation(callback?)  进行停止任何正在运行的动画或者追踪器，最终callback会被调用，该参数为动画结束的时候那个最终值。

interpolate(config)   在更新属性之前对值进行插值函数映射 ：例如 映射0-1到0-10

animate(animation,callback)   私有方法，一般在自定义动画类中可能会使用到

stopTracking()  私有方法

Track(tracking)  私有方法

AnimatedValueXY类

用设置驱动2D动画的运行，例如滑动操作等。该使用的API和普通的Animated.Value几乎一模一样，只不过该包含两个Animated.Value值的复杂结构。实例如下:
4.1.重要方法

constructor(value?)

setValue(value)

setOffset(offset)

flattenOffset()

stopAnimation(callback?)

addListener(callback)

removeListener(id)

getLayout()

用于样式中，将{x,y}的形式转换成{left,top}的模式，例如: style={this.state.anim.getLayout()}

getTranslateTransform()

用于将{x,y}的组合形式转换成可以用于平移变化的模式,例如:style={{transform: this.state.anim.getTranslateTransform()}}

实战实例
上面我们已经把用于动画效果实现的主要Animated.Value和Animated.ValueXY讲解了一遍，以及配合上一讲的Animated动画基础篇的知识点，下面我们通过几个实例来具体演示一下动画操作实现。

5.1.首先我们来看一下视图的淡入的效果，核心代码如下: 运行效果


5.2.动画在移动过程中(旋转,平移,缩放)，加入插值函数。核心代码如下:

运行效果:


5.3.组合动画演示,这边是采用顺序动画,核心代码如下:

运行效果:


最后说两句
本文 全 部的源代码大家可以点击底部阅读原文查看或者: https://github.com/jiangqqlmj/AnimatedDemo

本公众号欢迎大家投稿，如果你希望你的文章可以被更多人看到，直接将md、doc等格式的文章到我邮箱即可（ 781931404@qq.com ），也可以加我QQ/微信( 781931404 )好友，需要注明（投稿），谢谢。



分享        收藏    纠错
推荐文章
1. iNCU App开发实践 - 技术选型篇
2. lesson-3 构建 React 项目开发模板
3. 【Android】React-Native为Fresco的初始化提供自定义的Configuratio..
4. Native | Hybrid | Web App选型及演进方案
5. 小程序页面间通信的5种方式
6. setState何时同步更新状态
相关推刊
by 董董董董董董董大笨蛋
《React Native》 41
我来评几句


请输入评论内容...
登录后评论
已发表评论数(0)

相关站点


公众账号
＋订阅
热门文章
1. iNCU App开发实践 - 技术选型篇
2. 【Android】React-Native为Fresco的初始化提供自定义的Configuration
3. lesson-3 构建 React 项目开发模板
4. Tangram是我们对界面动态化的态度
5. ReactNative开发常用的三方模块







关于我们 移动应用 意见反馈 官方微博

ActivityIndicatorIOS - ReactActivityIndicator
ActivityIndicator - ReactActivityIndicator
DatePickerIOS - ReactDatePicker TODO
DrawerLayoutAndroid - ReactDrawerLayout
Image - ReactImage
ListView - ReactListView
Modal - ReactModal
Navigator - ReactNavigator
PickerIOS ReactPicker
ProgressViewIOS - ReactProgressView
ScrollView - ReactScrollView
SegmentedControlIOS - ReactSegmentedControl
SliderIOS - ReactSlider
Switch - ReactSwitch
SwitchAndroid - ReactSwitch
SwitchIOS - ReactSwitch
RefreshControl - ReactRefreshControl
TabBarIOS - ReactTabBar
Text - ReactText
TextInput - ReactTextInput
ToastAndroid - ReactToast
Touchable - ReactTouchable
TouchableHighlight - ReactTouchableHighlight
TouchableOpacity - ReactTouchableOpacity
TouchableWithoutFeedback - ReactTouchableWithoutFeedback
View - ReactView
ViewPagerAndroid - ReactViewPager

Alert - ReactAlert
AlertIOS - ReactAlert
Animated - ReactAnimated
AppRegistry - ReactAppRegistry
AsyncStorage - ReactAsyncStorage
Dimensions - ReactDimensions
Easing - ReactEasing
InteractionManager - ReactInteractionManager
LayoutAnimation - ReactLayoutAnimation
PanResponder - ReactPanResponder
PixelRatio - ReactPixelRatio
StyleSheet - ReactStyleSheet

NativeModules - ReactNativeModules
Platform - ReactPlatform
processColor - ReactProcessColor

READ_CALENDAR: 'android.permission.READ_CALENDAR',
WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
CAMERA: 'android.permission.CAMERA',
READ_CONTACTS: 'android.permission.READ_CONTACTS',
WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
GET_ACCOUNTS:  'android.permission.GET_ACCOUNTS',
ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
CALL_PHONE: 'android.permission.CALL_PHONE',
READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
USE_SIP: 'android.permission.USE_SIP',
PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
BODY_SENSORS:  'android.permission.BODY_SENSORS',
SEND_SMS: 'android.permission.SEND_SMS',
RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
READ_SMS: 'android.permission.READ_SMS',
RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',

alignItems:'flex-start,center,flex-end,stretch',
constructor:'1',
alignSelf:'12',
backfaceVisibility:'124',
borderBottomColor:'123413',
borderBottomLeftRadius:'123',
borderBottomRightRadius:'123',
borderBottomWidth:'123',
borderColor:'1234',
borderLeftColor:'12',
borderLeftWidth:'123',
borderRadius:'123',
borderRightColor:'123',
borderRightWidth:'123',

borderStyle:'124',
borderTopColor:'124',
borderTopLeftRadius:'123',
borderTopRightRadius:'123',
borderTopWidth:'124',
borderWidth:1,
backgroundColor:1,
bottom:1,
color:1,
decomposedMatrix:1,
elevation:1,
flex:1,
flexBasis:1,
flexDirection:'row,column,row-reverse,column-reverse',
flexGrow:1,
flexShrink:1,
flexWrap:1,
fontFamily:1,
fontSize:1,
fontStyle:1,
fontVariant:1,
fontWeight:1
height:1,
justifyContent:'center,flex-start,flex-end,space-around,space-between',
left:1,
letterSpacing:1,
lineHeight:1,
margin:1,
marginBottom:1,
marginHorizontal:1,
marginLeft:1,
marginRight:1,
marginTop:1,
maxHeight:1,
maxWidth:1,
minWidth:1,
opacity:1,
overflow:1,
overlayColor:1,
padding:1,
paddingBottom:1,
paddingTop:1,
paddingVertical:1,
position:'absolute',
right:1,
resizeMode:1,
rotation:1,
scaleX:1,
scaleY:1,
shadowColor:1,
shadowOffset:1,
shadowOpacity:1,
shadowRadius:1,
textAlign:'auto', 'left', 'right', 'center', 'justify',
textAlignVertical:'auto', 'top', 'bottom', 'center',
textDecorationColor:1,
textDecorationLine:1,
textDecorationStyle:1,
textShadowColor:1,
textShadowOffset:1,
textShadowRadius:1,
tintColor:1,
top:1,
transform:1,
transformMatrix:1,
translateX:1,
translatrY:1,
width:1,
writingDirection:1,
zIndex:1,
