import React from 'react';
const LABEL_9717 = 'component_9717';
export function Component9717({ value = 9717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9717, 'data-value': derived.doubled }, children);
}
export default Component9717;
