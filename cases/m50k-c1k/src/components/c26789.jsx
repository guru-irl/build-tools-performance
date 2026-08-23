import React from 'react';
const LABEL_26789 = 'component_26789';
export function Component26789({ value = 26789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26789, 'data-value': derived.doubled }, children);
}
export default Component26789;
