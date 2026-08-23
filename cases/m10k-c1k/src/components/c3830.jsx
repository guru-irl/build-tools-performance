import React from 'react';
const LABEL_3830 = 'component_3830';
export function Component3830({ value = 3830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3830, 'data-value': derived.doubled }, children);
}
export default Component3830;
