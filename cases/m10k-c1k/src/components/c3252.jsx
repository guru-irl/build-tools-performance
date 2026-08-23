import React from 'react';
const LABEL_3252 = 'component_3252';
export function Component3252({ value = 3252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3252, 'data-value': derived.doubled }, children);
}
export default Component3252;
