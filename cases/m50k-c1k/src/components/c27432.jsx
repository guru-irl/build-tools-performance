import React from 'react';
const LABEL_27432 = 'component_27432';
export function Component27432({ value = 27432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27432, 'data-value': derived.doubled }, children);
}
export default Component27432;
