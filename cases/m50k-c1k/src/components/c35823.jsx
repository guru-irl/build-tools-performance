import React from 'react';
const LABEL_35823 = 'component_35823';
export function Component35823({ value = 35823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35823, 'data-value': derived.doubled }, children);
}
export default Component35823;
