import React from 'react';
const LABEL_17018 = 'component_17018';
export function Component17018({ value = 17018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17018, 'data-value': derived.doubled }, children);
}
export default Component17018;
