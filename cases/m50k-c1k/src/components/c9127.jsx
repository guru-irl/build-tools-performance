import React from 'react';
const LABEL_9127 = 'component_9127';
export function Component9127({ value = 9127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9127, 'data-value': derived.doubled }, children);
}
export default Component9127;
