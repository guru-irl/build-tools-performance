import React from 'react';
const LABEL_23273 = 'component_23273';
export function Component23273({ value = 23273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23273, 'data-value': derived.doubled }, children);
}
export default Component23273;
