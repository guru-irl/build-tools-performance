import React from 'react';
const LABEL_23374 = 'component_23374';
export function Component23374({ value = 23374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23374, 'data-value': derived.doubled }, children);
}
export default Component23374;
