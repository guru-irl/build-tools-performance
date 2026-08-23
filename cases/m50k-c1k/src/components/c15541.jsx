import React from 'react';
const LABEL_15541 = 'component_15541';
export function Component15541({ value = 15541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15541, 'data-value': derived.doubled }, children);
}
export default Component15541;
