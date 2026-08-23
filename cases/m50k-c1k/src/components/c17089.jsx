import React from 'react';
const LABEL_17089 = 'component_17089';
export function Component17089({ value = 17089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17089, 'data-value': derived.doubled }, children);
}
export default Component17089;
