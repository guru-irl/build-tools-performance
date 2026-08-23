import React from 'react';
const LABEL_22338 = 'component_22338';
export function Component22338({ value = 22338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22338, 'data-value': derived.doubled }, children);
}
export default Component22338;
