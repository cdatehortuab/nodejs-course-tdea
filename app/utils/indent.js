function indent(string, indentStr = '    ') {
  return `${indentStr}${string.replace(/\n/g, `\n${indentStr}`)}`;
}

module.exports = indent;
