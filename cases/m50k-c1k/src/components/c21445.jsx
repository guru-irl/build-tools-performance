import React from 'react';
const LABEL_21445 = 'component_21445';
export function Component21445({ value = 21445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21445, 'data-value': derived.doubled }, children);
}
export default Component21445;
