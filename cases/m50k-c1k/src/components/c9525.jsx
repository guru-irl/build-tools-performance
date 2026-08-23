import React from 'react';
const LABEL_9525 = 'component_9525';
export function Component9525({ value = 9525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9525, 'data-value': derived.doubled }, children);
}
export default Component9525;
