import React from 'react';
const LABEL_21577 = 'component_21577';
export function Component21577({ value = 21577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21577, 'data-value': derived.doubled }, children);
}
export default Component21577;
