import React from 'react';
const LABEL_33525 = 'component_33525';
export function Component33525({ value = 33525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33525, 'data-value': derived.doubled }, children);
}
export default Component33525;
