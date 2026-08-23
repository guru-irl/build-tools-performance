import React from 'react';
const LABEL_33533 = 'component_33533';
export function Component33533({ value = 33533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33533, 'data-value': derived.doubled }, children);
}
export default Component33533;
