import React from 'react';
const LABEL_27175 = 'component_27175';
export function Component27175({ value = 27175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27175, 'data-value': derived.doubled }, children);
}
export default Component27175;
