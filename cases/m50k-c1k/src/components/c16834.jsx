import React from 'react';
const LABEL_16834 = 'component_16834';
export function Component16834({ value = 16834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16834, 'data-value': derived.doubled }, children);
}
export default Component16834;
