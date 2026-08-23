import React from 'react';
const LABEL_18175 = 'component_18175';
export function Component18175({ value = 18175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18175, 'data-value': derived.doubled }, children);
}
export default Component18175;
