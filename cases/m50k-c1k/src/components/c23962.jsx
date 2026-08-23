import React from 'react';
const LABEL_23962 = 'component_23962';
export function Component23962({ value = 23962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23962, 'data-value': derived.doubled }, children);
}
export default Component23962;
