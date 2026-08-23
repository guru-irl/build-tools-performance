import React from 'react';
const LABEL_21825 = 'component_21825';
export function Component21825({ value = 21825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21825, 'data-value': derived.doubled }, children);
}
export default Component21825;
