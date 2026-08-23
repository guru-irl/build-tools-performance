import React from 'react';
const LABEL_21428 = 'component_21428';
export function Component21428({ value = 21428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21428, 'data-value': derived.doubled }, children);
}
export default Component21428;
