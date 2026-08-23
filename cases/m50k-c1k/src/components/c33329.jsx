import React from 'react';
const LABEL_33329 = 'component_33329';
export function Component33329({ value = 33329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33329, 'data-value': derived.doubled }, children);
}
export default Component33329;
