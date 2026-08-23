import React from 'react';
const LABEL_23279 = 'component_23279';
export function Component23279({ value = 23279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23279, 'data-value': derived.doubled }, children);
}
export default Component23279;
