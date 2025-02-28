module.exports = {

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    // 增加 ts 文件后缀
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.d.ts'],
    },
    // 增加 ts 文件后缀
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.ts', '.json'],
      },
    },
    // 增加 ts 文件后缀
    'import/extensions': ['.js', '.ts', '.mjs'],
  },
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true, // 兼容未在 tsconfig.json 中包含的文件
    extraFileExtensions: ['.vue'],
  },
  rules: {
    // 在类重载后不跳过检查空行
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],


    // 运算符两侧需要有空格，并增加对枚举类型支持
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: false }],

    // 关键字前后有一个空格，并增加了对函数调用的泛型类型参数的支持。
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'error',

    // 指定类型时应该正确添加空格
    '@typescript-eslint/type-annotation-spacing': 'error',

    // 调用函数时，函数名与括号之间没有空格，并增加了对函数调用的泛型类型参数的支持
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',

    // 逗号前面没空格，后面有空格
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'error',

    // 函数声明时，对于命名函数，参数的小括号前无空格；对于匿名函数和 async 箭头函数，参数的小括号前有空格
    // 增加了对函数调用的泛型类型参数的支持
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always',
      },
    ],

    // interface 和 type 里的成员统一使用分号（;）进行分割，单行类型的最后一个元素不加分号
    '@typescript-eslint/member-delimiter-style': 'error',



    // 对于非空代码块，采用 Egyptian Brackets 风格
    // 增加对 enum、interface、namespace、module 的支持
    'brace-style': 'off',
    '@typescript-eslint/brace-style': 'error',

    // 不要使用 new Array() 和 Array() 创建数组，除非为了构造某一长度的空数组
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': ['error'],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {
      vars: 'all', args: 'after-used', ignoreRestSiblings: true,
    }],
    // 禁止部分值被作为类型标注，需要对每一种被禁用的类型提供特定的说明
    // 1. 不使用大写的原始类型，应该使用小写的类型
    // 2. 对于对象类型，应使用 Record<string, unknown>，而不是 object
    // 3. 对于函数类型，应使用入参和返回值被标注的具体类型
    '@typescript-eslint/ban-types': 'error',

    // 不允许返回一个类型是 void 的表达式
    '@typescript-eslint/no-confusing-void-expression': 'error',

    // 不允许不必要的类型标注，但允许类的属性成员进行额外标注
    '@typescript-eslint/no-inferrable-types': 'error',

    // 使用泛型时，不允许指定与默认类型参数一致的类型参数
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // 不允许与默认约束一致的泛型约束
    // 在 TS 3.9 版本以后，对于未指定的泛型约束，默认使用 unknown ，在这之前则是 any
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // 使用可选链式表达式而不是逻辑与运算符
    // 比如：使用 a?.b 代替 a && a.b，语法上更简洁
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',

    // 不允许非空断言与空值合并同时使用
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',

    // 不允许非空断言与可选链同时使用
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',

    // 如果索引仅用于访问正在迭代的数组，则首选 for...of 而不是 for 循环遍历数组
    '@typescript-eslint/prefer-for-of': 'warn',

    //  重载的函数写在一起
    '@typescript-eslint/adjacent-overload-signatures': 'warn',

    // 具有默认值的函数参数应该被放置到参数列表右边
    '@typescript-eslint/default-param-last': 'warn',

    // 设置类的成员的可访问性，public 可省略
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
    ],

    // 对于枚举成员值，只允许使用普通字符串、数字、null、正则，而不允许变量复制、模板字符串等需要计算的操作
    '@typescript-eslint/prefer-literal-enum-member': 'warn',

    // 只允许对异步函数、Promise、PromiseLike 使用 await 调用
    '@typescript-eslint/await-thenable': 'warn',

    // 返回 Promise 的函数必须被标记为 async
    '@typescript-eslint/promise-function-async': 'error',

    // 约束使用 import type {} 进行类型的导入
    '@typescript-eslint/consistent-type-imports': 'error',

    // 不允许对同一模块重复导入，类型可重复导入
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'warn',

    // 禁止使用 module 来定义命名空间
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // 接口中的方法使用属性的方式定义。使用属性去定义接口中的方法，可以获得更严格的检查
    '@typescript-eslint/method-signature-style': 'error',

    // 不允许定义空的接口，允许单继承下的空接口
    '@typescript-eslint/no-empty-interface': 'warn',

    // 对于对象类型，优先使用 interface 定义
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // 禁止使用容易混淆的非空断言
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // 不允许额外的非空断言
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // 不允许与实际值一致的类型断言
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // 首选非空断言而不是显式类型转换
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    // 使用 as 进行类型断言而不是 <>
    '@typescript-eslint/consistent-type-assertions': 'warn',

    // 禁止使用 tslint:<rule-flag> 等相关注释，tslint 已经不再维护了
    '@typescript-eslint/ban-tslint-comment': 'error',

    // 禁止使用其他 @ts 规则，除非提供必要的说明。
    '@typescript-eslint/ban-ts-comment': 'warn',

    // 推荐使用 ts-expect-error 而不是 ts-ignore
    '@typescript-eslint/prefer-ts-expect-error': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Disable `no-undef` rule within TypeScript files
        // because it incorrectly errors when exporting default interfaces
        // https://github.com/iamturns/eslint-config-airbnb-typescript/issues/50
        // This will be caught by TypeScript compiler if `strictNullChecks` (or `strict`) is enabled
        'no-undef': 'off',

        /* Using TypeScript makes it safe enough to disable the checks below */

        // Disable ESLint-based module resolution check for improved monorepo support
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': 'off',
      },
    },
  ],
};