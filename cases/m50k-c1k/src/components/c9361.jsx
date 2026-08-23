import React from 'react';
const LABEL_9361 = 'component_9361';
export function Component9361({ value = 9361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9361, 'data-value': derived.doubled }, children);
}
export default Component9361;
