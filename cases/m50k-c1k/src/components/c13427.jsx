import React from 'react';
const LABEL_13427 = 'component_13427';
export function Component13427({ value = 13427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13427, 'data-value': derived.doubled }, children);
}
export default Component13427;
