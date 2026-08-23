import React from 'react';
const LABEL_3812 = 'component_3812';
export function Component3812({ value = 3812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3812, 'data-value': derived.doubled }, children);
}
export default Component3812;
