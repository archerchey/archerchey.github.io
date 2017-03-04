> 原文链接 : [The official raywenderlich.com Objective-C style guide](https://github.com/raywenderlich/objective-c-style-guide#language)  
> 原文作者 : [raywenderlich.com Team](https://www.raywenderlich.com)

# Objective-C编码规范

该编码规范制定参照raywenderlich.com的编码规范。

## 目录

* [语言](#language)
* [代码组织](#code-organization)
* [空格](#spacing)
* [注释](#comments)
* [命名](#naming)
    * [下划线](#underscores)
* [方法](#methods)
* [变量](#variables)
* [属性特性](#property-attributes)
* [点语法](#dot-notation-syntax)
* [字面值](#literals)
* [常量](#constants)
* [枚举类型](#enumerated-types)
* [Case语句](#case-statements)
* [私有属性](#private-properties)
* [布尔值](#booleans)
* [条件语句](#conditionals)
    * [三元操作符](#ternary-operator)
* [Init方法](#init-methods)
* [类构造方法](#class-constructor-methods)
* [CGRect函数](#cgrect-functions)
* [黄金路径](#golden-path)
* [错误处理](#error-handling)
* [单例模式](#singletons)
* [换行符](#line-breaks)
* [Xcode工程](#xcode-project)

<a name="language"></a>
## 语言

* 应该使用US英语.

**应该:**

```objc
UIColor *myColor = [UIColor whiteColor];
```

**不应该:**

```objc
UIColor *myColour = [UIColor whiteColor];
```

<a name="code-organization"></a>
## 代码组织

* 在方法分组和protocol／delegate实现中使用`#pragma mark -`来分类方法，遵循以下一般结构：

```objc
#pragma mark -

- (instancetype)init {}
- (void)dealloc {}
- (void)viewDidLoad {}
- (void)viewWillAppear:(BOOL)animated {}
- (void)didReceiveMemoryWarning {}

#pragma mark - accessors

- (void)setCustomProperty:(id)value {}
- (id)customProperty {}

#pragma mark - IBActions/Event Response

- (IBAction)submitData:(id)sender {}
- (void)someButtonDidPressed:(UIButton*)button

#pragma mark - public
- (void)publicMethod {}

#pragma mark - private
- (void)privateMethod {}

#pragma mark - protocol conformance

#pragma mark - UITextFieldDelegate

#pragma mark - UITableViewDataSource

#pragma mark - UITableViewDelegate

#pragma mark - NSCopying
- (id)copyWithZone:(NSZone *)zone {}

#pragma mark - NSObject
- (NSString *)description {}

```

<a name="spacing"></a>
## 空格

* 缩进采用**4**个空格。
* 方法大括号和其他大括号（`if`/`else`/`switch`/`while` 等）应在同一行打开并且在新行中关闭。

**应该:**

```objc
if (user.isHappy) {
    //Do something
} else {
    //Do something else
}
```

**不应该:**

```objc
if (user.isHappy)
{
  //Do something
}
else {
  //Do something else
}
```

* 方法之间应该有且只有一行。方法内的空行应该分离功能，但通常都抽离出来成为一个新方法。
* 优先使用auto-synthesis。但如果有必要，`@synthesize` 和 `@dynamic`应该在实现中每个都声明新的一行。
* 应该避免以冒号对齐的方式来调用方法。

**应该:**

```objc
// blocks are easily readable
[UIView animateWithDuration:1.0 animations:^{
  // something
} completion:^(BOOL finished) {
  // something
}];
```

**不应该:**

```objc
// colon-aligning makes the block indentation hard to read
[UIView animateWithDuration:1.0
                 animations:^{
                     // something
                 }
                 completion:^(BOOL finished) {
                     // something
                 }];
```

<a name="comments"></a>
## 注释

* 注释应该用来解释这段特殊代码**为什么**要这样做。任何注释都应该保持最新或被删除。
* 避免使用块注释，代码尽可能做到自解释。*例外：生成文档的注释除外*

<a name="naming"></a>
## 命名

* Apple命名规则尽可能坚持，特别是与这些相关的[memory management rules](https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/MemoryMgmt/Articles/MemoryMgmt.html) ([NARC](http://stackoverflow.com/a/2865194/340508))。
* 方法和变量名应该是完整的，具有描述性的。

**应该:**

```objc
UIButton *settingsButton;
```

**不应该:**

```objc
UIButton *setBut;
```

* 三个字符的前缀应该用在类和常量命名上（Core Data的实体名除外）。
* 常量的首字母大写并加上前缀，使用驼峰式命名法。

**应该:**

```objc
static NSTimeInterval const RWTTutorialViewControllerNavigationFadeAnimationDuration = 0.3;
```

**不应该:**

```objc
static NSTimeInterval const fadetime = 1.7;
```

* 属性的首字母小写，使用驼峰式命名法。尽量使用auto-synthesis。

**应该:**

```objc
@property (strong, nonatomic) NSString *descriptiveVariableName;
```

**不应该:**

```objc
id varnm;
```

<a name="underscores"></a>
### 下划线

* 使用属性时，实例变量应该使用`self.`来访问和改变。
* 但有一个特例：在初始化方法里，实例变量（例如，_variableName）应该直接被使用来避免getters/setters潜在的副作用。
* 局部变量不应该包含下划线。

<a name="methods"></a>
## 方法

* 在方法签名中，应该在方法类型（-/+ 符号）之后加一个空格。方法各个段之间应该也有一个空格（符合Apple的风格）。
* 参数之前应该包含一个具有描述性的关键字来描述参数（“and”这个词的用法应该保留，它不应该用于多个参数）。

**应该:**
```objc
- (void)setExampleText:(NSString *)text image:(UIImage *)image;
- (void)sendAction:(SEL)aSelector to:(id)anObject forAllCells:(BOOL)flag;
- (id)viewWithTag:(NSInteger)tag;
- (instancetype)initWithWidth:(CGFloat)width height:(CGFloat)height;
```

**不应该:**

```objc
-(void)setT:(NSString *)text i:(UIImage *)image;
- (void)sendAction:(SEL)aSelector :(id)anObject :(BOOL)flag;
- (id)taggedView:(NSInteger)tag;
- (instancetype)initWithWidth:(CGFloat)width andHeight:(CGFloat)height;
- (instancetype)initWith:(int)width and:(int)height;  // Never do this.
```

<a name="variables"></a>
## 变量

* 变量应该以描述性的方式来命名。单个字符的变量命名应该尽量避免，除了在`for()`循环。
* 星号表示变量是指针。例如， `NSString *text` 既不是 `NSString* text` 也不是 `NSString * text`，除了一些特殊情况下的常量。
* [私有变量](#private-properties) 应该尽可能代替实例变量。尽管使用实例变量是一种有效的方式，但更偏向于使用属性来保持代码一致性。
* 直接访问实例变量（_variable）应该尽量避免，除了在初始化方法（`init`， `initWithCoder:`， `dealloc` 方法和自定义的setters和getters等）。想了解关于如何在初始化方法和dealloc直接使用Accessor方法的更多信息，查看[这里](https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/MemoryMgmt/Articles/mmPractical.html#//apple_ref/doc/uid/TP40004447-SW6)

**应该:**

```objc
@interface RWTTutorial : NSObject

@property (strong, nonatomic) NSString *tutorialName;

@end
```

**不应该:**

```objc
@interface RWTTutorial : NSObject {
  NSString *tutorialName;
}
```

<a name="property-attributes"></a>
## 属性特性

* 所有属性特性应该显式地标明。

<a name="dot-notation-syntax"></a>
## 点语法

* 点语法应该**总是**被用来访问和修改属性，因为它使代码更加简洁。[]符号更偏向于用在其他例子。想了解更多，阅读[这里](https://developer.apple.com/library/ios/documentation/cocoa/conceptual/ProgrammingWithObjectiveC/EncapsulatingData/EncapsulatingData.html)

**应该:**
```objc
NSInteger arrayCount = [self.array count];
view.backgroundColor = [UIColor orangeColor];
[UIApplication sharedApplication].delegate;
```

**不应该:**
```objc
NSInteger arrayCount = self.array.count;
[view setBackgroundColor:[UIColor orangeColor]];
UIApplication.sharedApplication.delegate;
```

<a name="literals"></a>
## 字面值

* `NSString`，`NSDictionary`，`NSArray`，和`NSNumber`的字面值应该在创建这些类的不可变实例时被使用。请特别注意`nil`值不能传入`NSArray`和`NSDictionary`字面值，因为这样会导致crash。

**应该:**

```objc
NSArray *names = @[@"Brian", @"Matt", @"Chris", @"Alex", @"Steve", @"Paul"];
NSDictionary *productManagers = @{@"iPhone": @"Kate", @"iPad": @"Kamal", @"Mobile Web": @"Bill"};
NSNumber *shouldUseLiterals = @YES;
NSNumber *buildingStreetNumber = @10018;
```

**不应该:**

```objc
NSArray *names = [NSArray arrayWithObjects:@"Brian", @"Matt", @"Chris", @"Alex", @"Steve", @"Paul", nil];
NSDictionary *productManagers = [NSDictionary dictionaryWithObjectsAndKeys: @"Kate", @"iPhone", @"Kamal", @"iPad", @"Bill", @"Mobile Web", nil];
NSNumber *shouldUseLiterals = [NSNumber numberWithBool:YES];
NSNumber *buildingStreetNumber = [NSNumber numberWithInteger:10018];
```

<a name="constants"></a>
## 常量

* 使用`static`来声明而不是使用`#define`，除非显式地使用宏。

**应该:**

```objc
static NSString * const RWTAboutViewControllerCompanyName = @"RayWenderlich.com";

static CGFloat const RWTImageThumbnailHeight = 50.0;
```

**不应该:**

```objc
#define CompanyName @"RayWenderlich.com"

#define thumbnailHeight 2
```

<a name="enumerated-types"></a>
## 枚举类型

* 应该使用`NS_ENUM()`来使用固定的基本类型。

```objc
typedef NS_ENUM(NSInteger, RWTLeftMenuTopItemType) {
  RWTLeftMenuTopItemMain,
  RWTLeftMenuTopItemShows,
  RWTLeftMenuTopItemSchedule
};
```

* 你也可以显式地赋值：

```objc
typedef NS_ENUM(NSInteger, RWTGlobalConstants) {
  RWTPinSizeMin = 1,
  RWTPinSizeMax = 5,
  RWTPinCountMin = 100,
  RWTPinCountMax = 500,
};
```

* k-style常量定义应该**避免**除非编写Core Foundation C的代码。

**不应该:**

```objc
enum GlobalConstants {
  kMaxPinSize = 5,
  kMaxPinCount = 500,
};
```

<a name="case-statements"></a>
## Case语句

* 当一个case语句包含多行代码时，大括号应该加上。

```objc
switch (condition) {
  case 1:
    // ...
    break;
  case 2: {
    // ...
    // Multi-line example using braces
    break;
  }
  case 3:
    // ...
    break;
  default: 
    // ...
    break;
}

```

* 当相同代码被多个cases使用时，一个fall-through应该被使用。为了代码更加清晰，一个fall-through需要注释。

```objc
switch (condition) {
  case 1:
    // ** fall-through! **
  case 2:
    // code executed for values 1 and 2
    break;
  default: 
    // ...
    break;
}

```

* 当在switch使用枚举类型时，不需要‘default’。

```objc
RWTLeftMenuTopItemType menuType = RWTLeftMenuTopItemMain;

switch (menuType) {
  case RWTLeftMenuTopItemMain:
    // ...
    break;
  case RWTLeftMenuTopItemShows:
    // ...
    break;
  case RWTLeftMenuTopItemSchedule:
    // ...
    break;
}
```

<a name="private-properties"></a>
## 私有属性

* 私有属性应该在类的实现文件中的类扩展（匿名分类）中声明。

```objc
@interface RWTDetailViewController ()

@property (strong, nonatomic) GADBannerView *googleAdView;
@property (strong, nonatomic) ADBannerView *iAdView;
@property (strong, nonatomic) UIWebView *adXWebView;

@end
```

<a name="booleans"></a>
## 布尔值

* Objective-C使用`YES`和`NO`。`true`和`false`只在CoreFoundation，C或C++代码中使用。
* `nil`被解析成`NO`，所以没有必要在条件语句比较。
* 不要直接与`YES`比较，因为`YES`被定义为1，而一个`BOOL`值能被设置为8位。

**应该:**

```objc
if (someObject) {}
if (![anotherObject boolValue]) {}
```

**不应该:**

```objc
if (someObject == nil) {}
if ([anotherObject boolValue] == NO) {}
if (isAwesome == YES) {} // Never do this.
if (isAwesome == true) {} // Never do this.
```

* 属性可以指定get访问器的惯用名称。如果`BOOL`属性的名字是一个形容词，则"is"前缀可以忽略。文字和例子从这里引用[Cocoa Naming Guidelines](https://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/CodingGuidelines/Articles/NamingIvarsAndTypes.html#//apple_ref/doc/uid/20001284-BAJGIIJE)

```objc
@property (assign, getter=isEditable) BOOL editable;
```

<a name="conditionals"></a>
## 条件语句

* 条件语句主体应该使用大括号包围，即使条件语句主体能够不用大括号编写（例如，只用一行代码）。避免添加第二行代码时产生不期望的后果。

**应该:**

```objc
if (!error) {
  return success;
}
```

**不应该:**

```objc
if (!error)
  return success;
```

或

```objc
if (!error) return success;
```

<a name="ternary-operator"></a>
### 三元操作符

* 应该在根据单个条件求值的情况下使用三元操作符。多个条件求值时，推荐使用`if`语句或重构成实例变量读。
* Non-boolean的变量与某东西比较，加上括号()会提高可读性。如果被比较的变量是boolean类型，那么就不需要括号。

**应该:**

```objc
NSInteger value = 5;
result = (value != 0) ? x : y;

BOOL isHorizontal = YES;
result = isHorizontal ? x : y;
```

**不应该:**

```objc
result = a > b ? x = c > d ? c : d : y;
```

<a name="init-methods"></a>
## Init方法

* Init方法应该遵循Apple生成代码模板的命名规则。返回类型应该使用`instancetype`而不是`id`。查看关于instancetype的文章[Class Constructor Methods](#class-constructor-methods)

```objc
- (instancetype)init {
  self = [super init];
  if (self) {
    // ...
  }
  return self;
}
```

<a name="class-constructor-methods"></a>
## 类构造方法

* 类构造方法应该返回类型是`instancetype `而不是`id`。这样确保编译器正确地推断结果类型。关于更多instancetype信息，请查看[NSHipster.com](http://nshipster.com/instancetype/)

```objc
@interface Airplane
+ (instancetype)airplaneWithType:(RWTAirplaneType)type;
@end
```

<a name="cgrect-functions"></a>
## CGRect函数

* 当访问`CGRect`里的`x`，`y`，`width`，或 `height`时，应该使用[`CGGeometry`函数](http://developer.apple.com/library/ios/#documentation/graphicsimaging/reference/CGGeometry/Reference/reference.html)而不是直接通过结构体来访问。

**应该:**

```objc
CGRect frame = self.view.frame;

CGFloat x = CGRectGetMinX(frame);
CGFloat y = CGRectGetMinY(frame);
CGFloat width = CGRectGetWidth(frame);
CGFloat height = CGRectGetHeight(frame);
CGRect frame = CGRectMake(0.0, 0.0, width, height);
```

**不应该:**

```objc
CGRect frame = self.view.frame;

CGFloat x = frame.origin.x;
CGFloat y = frame.origin.y;
CGFloat width = frame.size.width;
CGFloat height = frame.size.height;
CGRect frame = (CGRect){ .origin = CGPointZero, .size = frame.size };
```

<a name="golden-path"></a>
## 黄金路径

* 当使用条件语句编码时，避免嵌套`if`语句，多个返回语句也是可以的。

**应该:**

```objc
- (void)someMethod {
  if (![someOther boolValue]) {
	return;
  }

  //Do something important
}
```

**不应该:**

```objc
- (void)someMethod {
  if ([someOther boolValue]) {
    //Do something important
  }
}
```

<a name="error-handling"></a>
## 错误处理

* 当方法返回一个错误变量时，应判断返回值而不是错误变量。

**应该:**
```objc
NSError *error;
if (![self trySomethingWithError:&error]) {
  // Handle Error
}
```

**不应该:**
```objc
NSError *error;
[self trySomethingWithError:&error];
if (error) {
  // Handle Error
}
```

* 在成功的情况下，有些Apple的APIs记录垃圾值（garbage values）到错误参数（如果non-NULL），那么判断错误值会导致false负值和crash。

<a name="singletons"></a>
## 单例模式

* 单例对象应该使用线程安全模式来创建共享实例。这会防止[possible and sometimes prolific crashes](http://cocoasamurai.blogspot.com/2011/04/singletons-your-doing-them-wrong.html).

```objc
+ (instancetype)sharedInstance {
  static id sharedInstance = nil;

  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    sharedInstance = [[self alloc] init];
  });

  return sharedInstance;
}
```

<a name="line-breaks"></a>
## 换行符

* 换行符的风格主要影响打印和网上的可读性。一行很长的代码应该分成两行，下一行用两个缩进隔开。

```objc
self.productsRequest = [[SKProductsRequest alloc] initWithProductIdentifiers:productIdentifiers];
```

```objc
self.productsRequest = [[SKProductsRequest alloc] 
        initWithProductIdentifiers:productIdentifiers];
```

<a name="xcode-project"></a>
## Xcode工程

* 物理文件应该与Xcode工程文件保持同步，任何Xcode分组的创建应该在文件系统中体现。代码不仅是根据**类型**来分组，而且还可以根据**功能**来分组，这样代码更加清晰。
* 尽可能在target的Build Settings中打开"Treat Warnings as Errors，并启用[additional warnings](http://boredzo.org/blog/archives/2009-11-07/warnings)。如果你需要忽略特殊的警告，可以使用 [Clang's pragma feature](http://clang.llvm.org/docs/UsersManual.html#controlling-diagnostics-via-pragmas)。

# 其他Objective-C编码规范

* [Robots & Pencils](https://github.com/RobotsAndPencils/objective-c-style-guide)
* [New York Times](https://github.com/NYTimes/objective-c-style-guide)
* [Google](http://google-styleguide.googlecode.com/svn/trunk/objcguide.xml)
* [GitHub](https://github.com/github/objective-c-conventions)
* [Adium](https://trac.adium.im/wiki/CodingStyle)
* [Sam Soffes](https://gist.github.com/soffes/812796)
* [CocoaDevCentral](http://cocoadevcentral.com/articles/000082.php)
* [Luke Redpath](http://lukeredpath.co.uk/blog/my-objective-c-style-guide.html)
* [Marcus Zarra](http://www.cimgf.com/zds-code-style-guide/)
