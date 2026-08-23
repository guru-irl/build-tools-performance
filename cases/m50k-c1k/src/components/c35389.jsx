import React from 'react';
const LABEL_35389 = 'component_35389';
export function Component35389({ value = 35389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35389, 'data-value': derived.doubled }, children);
}
export default Component35389;
