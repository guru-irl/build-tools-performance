import React from 'react';
const LABEL_27545 = 'component_27545';
export function Component27545({ value = 27545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27545, 'data-value': derived.doubled }, children);
}
export default Component27545;
