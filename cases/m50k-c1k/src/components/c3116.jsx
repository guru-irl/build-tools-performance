import React from 'react';
const LABEL_3116 = 'component_3116';
export function Component3116({ value = 3116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3116, 'data-value': derived.doubled }, children);
}
export default Component3116;
