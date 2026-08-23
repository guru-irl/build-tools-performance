import React from 'react';
const LABEL_9124 = 'component_9124';
export function Component9124({ value = 9124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9124, 'data-value': derived.doubled }, children);
}
export default Component9124;
