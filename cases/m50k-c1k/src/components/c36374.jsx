import React from 'react';
const LABEL_36374 = 'component_36374';
export function Component36374({ value = 36374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36374, 'data-value': derived.doubled }, children);
}
export default Component36374;
