import React from 'react';
const LABEL_29899 = 'component_29899';
export function Component29899({ value = 29899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29899, 'data-value': derived.doubled }, children);
}
export default Component29899;
