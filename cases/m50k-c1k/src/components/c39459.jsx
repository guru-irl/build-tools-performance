import React from 'react';
const LABEL_39459 = 'component_39459';
export function Component39459({ value = 39459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39459, 'data-value': derived.doubled }, children);
}
export default Component39459;
