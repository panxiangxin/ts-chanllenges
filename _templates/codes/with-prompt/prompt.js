// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//@ts-ignore
module.exports = [{
  type: 'input',
  name: 'questions',
  message: "TS 类型练习题目?",
  validate(value) {
    if (!value.length) {
      return '题目名称不能为空！'
    }
    return true
  }
}]