import React from 'react';
const LABEL_24096 = 'component_24096';
export function Component24096({ value = 24096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24096, 'data-value': derived.doubled }, children);
}
export default Component24096;
