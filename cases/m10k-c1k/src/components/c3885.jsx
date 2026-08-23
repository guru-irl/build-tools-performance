import React from 'react';
const LABEL_3885 = 'component_3885';
export function Component3885({ value = 3885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3885, 'data-value': derived.doubled }, children);
}
export default Component3885;
