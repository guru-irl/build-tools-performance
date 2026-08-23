import React from 'react';
const LABEL_17633 = 'component_17633';
export function Component17633({ value = 17633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17633, 'data-value': derived.doubled }, children);
}
export default Component17633;
