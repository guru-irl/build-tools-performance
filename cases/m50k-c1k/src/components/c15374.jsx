import React from 'react';
const LABEL_15374 = 'component_15374';
export function Component15374({ value = 15374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15374, 'data-value': derived.doubled }, children);
}
export default Component15374;
