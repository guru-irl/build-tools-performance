import React from 'react';
const LABEL_3660 = 'component_3660';
export function Component3660({ value = 3660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3660, 'data-value': derived.doubled }, children);
}
export default Component3660;
