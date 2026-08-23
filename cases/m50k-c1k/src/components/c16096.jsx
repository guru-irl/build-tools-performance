import React from 'react';
const LABEL_16096 = 'component_16096';
export function Component16096({ value = 16096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16096, 'data-value': derived.doubled }, children);
}
export default Component16096;
