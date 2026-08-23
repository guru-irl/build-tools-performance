import React from 'react';
const LABEL_39096 = 'component_39096';
export function Component39096({ value = 39096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39096, 'data-value': derived.doubled }, children);
}
export default Component39096;
