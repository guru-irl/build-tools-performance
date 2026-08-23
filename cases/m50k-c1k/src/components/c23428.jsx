import React from 'react';
const LABEL_23428 = 'component_23428';
export function Component23428({ value = 23428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23428, 'data-value': derived.doubled }, children);
}
export default Component23428;
