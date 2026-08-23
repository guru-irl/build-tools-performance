import React from 'react';
const LABEL_39062 = 'component_39062';
export function Component39062({ value = 39062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39062, 'data-value': derived.doubled }, children);
}
export default Component39062;
