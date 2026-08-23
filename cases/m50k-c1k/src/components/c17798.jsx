import React from 'react';
const LABEL_17798 = 'component_17798';
export function Component17798({ value = 17798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17798, 'data-value': derived.doubled }, children);
}
export default Component17798;
