import React from 'react';
const LABEL_27429 = 'component_27429';
export function Component27429({ value = 27429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27429, 'data-value': derived.doubled }, children);
}
export default Component27429;
