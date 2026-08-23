import React from 'react';
const LABEL_23541 = 'component_23541';
export function Component23541({ value = 23541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23541, 'data-value': derived.doubled }, children);
}
export default Component23541;
