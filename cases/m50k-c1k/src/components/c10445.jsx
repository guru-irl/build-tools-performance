import React from 'react';
const LABEL_10445 = 'component_10445';
export function Component10445({ value = 10445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10445, 'data-value': derived.doubled }, children);
}
export default Component10445;
