import React from 'react';
const LABEL_17340 = 'component_17340';
export function Component17340({ value = 17340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17340, 'data-value': derived.doubled }, children);
}
export default Component17340;
