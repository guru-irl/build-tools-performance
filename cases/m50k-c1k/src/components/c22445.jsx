import React from 'react';
const LABEL_22445 = 'component_22445';
export function Component22445({ value = 22445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22445, 'data-value': derived.doubled }, children);
}
export default Component22445;
