import React from 'react';
const LABEL_17374 = 'component_17374';
export function Component17374({ value = 17374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17374, 'data-value': derived.doubled }, children);
}
export default Component17374;
