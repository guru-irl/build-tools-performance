import React from 'react';
const LABEL_10097 = 'component_10097';
export function Component10097({ value = 10097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10097, 'data-value': derived.doubled }, children);
}
export default Component10097;
