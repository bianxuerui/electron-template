'use strict'

module.exports = {
    types: [
      {
        value: 'feat',
        name: '✨  feat:     新功能',
      },
      {
        value: 'fix',
        name: '🐛  fix:      修复bug',
      },
      {
        value: 'refactor',
        name: '♻️  refactor: 代码重构（既不是新功能也不是改bug）',
      },
      {
        value: 'chore',
        name: '🎫  chore:    修改流程配置',
      },
      {
        value: 'docs',
        name: '📝  docs:     修改了文档',
      },
      {
        value: 'test',
        name: '✅  test:     更新了测试用例',
      },
      {
        value: 'style',
        name: '💄  style:    修改了样式文件',
      },
      {
        value: 'perf',
        name: '⚡️  perf:     新能优化',
      },
      {
        value: 'revert',
        name: '⏪  revert:   回退提交',
      },
    ],
    scopes: [],
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    subjectLimit: 50,
    messages: {
      type: '请选择你本次改动的修改类型',
      customScope: '\n请明确本次改动的范围（可填）:',
      subject: '简短描述本次改动:\n',
      body: '详细描述本次改动 (可填). 使用 "|" 换行:\n',
      breaking: '请列出任何 BREAKING CHANGES (可填):\n',
      footer: '请列出本次改动关闭的ISSUE (可填). 比如: #31, #34:\n',
      confirmCommit: '你确定提交本次改动吗?',
    },
  };