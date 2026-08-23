import React from 'react';
const LABEL_9369 = 'component_9369';
export function Component9369({ value = 9369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9369, 'data-value': derived.doubled }, children);
}
export default Component9369;
