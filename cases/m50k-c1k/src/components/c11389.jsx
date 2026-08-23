import React from 'react';
const LABEL_11389 = 'component_11389';
export function Component11389({ value = 11389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11389, 'data-value': derived.doubled }, children);
}
export default Component11389;
