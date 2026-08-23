import React from 'react';
const LABEL_8824 = 'component_8824';
export function Component8824({ value = 8824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8824, 'data-value': derived.doubled }, children);
}
export default Component8824;
