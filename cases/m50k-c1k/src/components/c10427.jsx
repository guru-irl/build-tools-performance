import React from 'react';
const LABEL_10427 = 'component_10427';
export function Component10427({ value = 10427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10427, 'data-value': derived.doubled }, children);
}
export default Component10427;
