import React from 'react';
const LABEL_27454 = 'component_27454';
export function Component27454({ value = 27454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27454, 'data-value': derived.doubled }, children);
}
export default Component27454;
