import React from 'react';
const LABEL_33103 = 'component_33103';
export function Component33103({ value = 33103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33103, 'data-value': derived.doubled }, children);
}
export default Component33103;
