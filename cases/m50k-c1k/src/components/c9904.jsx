import React from 'react';
const LABEL_9904 = 'component_9904';
export function Component9904({ value = 9904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9904, 'data-value': derived.doubled }, children);
}
export default Component9904;
