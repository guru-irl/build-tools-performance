import React from 'react';
const LABEL_26646 = 'component_26646';
export function Component26646({ value = 26646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26646, 'data-value': derived.doubled }, children);
}
export default Component26646;
