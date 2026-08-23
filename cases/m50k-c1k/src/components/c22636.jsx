import React from 'react';
const LABEL_22636 = 'component_22636';
export function Component22636({ value = 22636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22636, 'data-value': derived.doubled }, children);
}
export default Component22636;
