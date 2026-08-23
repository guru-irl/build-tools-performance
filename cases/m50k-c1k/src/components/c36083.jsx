import React from 'react';
const LABEL_36083 = 'component_36083';
export function Component36083({ value = 36083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36083, 'data-value': derived.doubled }, children);
}
export default Component36083;
