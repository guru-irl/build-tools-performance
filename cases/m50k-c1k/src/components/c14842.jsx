import React from 'react';
const LABEL_14842 = 'component_14842';
export function Component14842({ value = 14842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14842, 'data-value': derived.doubled }, children);
}
export default Component14842;
