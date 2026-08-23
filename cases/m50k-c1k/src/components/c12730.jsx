import React from 'react';
const LABEL_12730 = 'component_12730';
export function Component12730({ value = 12730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12730, 'data-value': derived.doubled }, children);
}
export default Component12730;
