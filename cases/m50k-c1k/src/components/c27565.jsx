import React from 'react';
const LABEL_27565 = 'component_27565';
export function Component27565({ value = 27565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27565, 'data-value': derived.doubled }, children);
}
export default Component27565;
