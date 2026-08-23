import React from 'react';
const LABEL_21027 = 'component_21027';
export function Component21027({ value = 21027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21027, 'data-value': derived.doubled }, children);
}
export default Component21027;
