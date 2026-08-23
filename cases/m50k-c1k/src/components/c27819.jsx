import React from 'react';
const LABEL_27819 = 'component_27819';
export function Component27819({ value = 27819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27819, 'data-value': derived.doubled }, children);
}
export default Component27819;
