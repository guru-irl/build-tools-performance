import React from 'react';
const LABEL_13804 = 'component_13804';
export function Component13804({ value = 13804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13804, 'data-value': derived.doubled }, children);
}
export default Component13804;
