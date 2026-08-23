import React from 'react';
const LABEL_27528 = 'component_27528';
export function Component27528({ value = 27528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27528, 'data-value': derived.doubled }, children);
}
export default Component27528;
