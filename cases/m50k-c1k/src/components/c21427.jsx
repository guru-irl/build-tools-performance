import React from 'react';
const LABEL_21427 = 'component_21427';
export function Component21427({ value = 21427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21427, 'data-value': derived.doubled }, children);
}
export default Component21427;
