import React from 'react';
const LABEL_14096 = 'component_14096';
export function Component14096({ value = 14096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14096, 'data-value': derived.doubled }, children);
}
export default Component14096;
