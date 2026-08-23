import React from 'react';
const LABEL_3552 = 'component_3552';
export function Component3552({ value = 3552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3552, 'data-value': derived.doubled }, children);
}
export default Component3552;
