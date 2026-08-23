import React from 'react';
const LABEL_27497 = 'component_27497';
export function Component27497({ value = 27497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27497, 'data-value': derived.doubled }, children);
}
export default Component27497;
