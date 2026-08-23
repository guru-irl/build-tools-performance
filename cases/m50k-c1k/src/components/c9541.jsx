import React from 'react';
const LABEL_9541 = 'component_9541';
export function Component9541({ value = 9541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9541, 'data-value': derived.doubled }, children);
}
export default Component9541;
