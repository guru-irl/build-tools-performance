import React from 'react';
const LABEL_27426 = 'component_27426';
export function Component27426({ value = 27426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27426, 'data-value': derived.doubled }, children);
}
export default Component27426;
