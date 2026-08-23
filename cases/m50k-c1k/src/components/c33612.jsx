import React from 'react';
const LABEL_33612 = 'component_33612';
export function Component33612({ value = 33612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33612, 'data-value': derived.doubled }, children);
}
export default Component33612;
