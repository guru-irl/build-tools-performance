import React from 'react';
const LABEL_17165 = 'component_17165';
export function Component17165({ value = 17165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17165, 'data-value': derived.doubled }, children);
}
export default Component17165;
