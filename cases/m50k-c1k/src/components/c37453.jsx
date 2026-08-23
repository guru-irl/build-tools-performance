import React from 'react';
const LABEL_37453 = 'component_37453';
export function Component37453({ value = 37453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37453, 'data-value': derived.doubled }, children);
}
export default Component37453;
