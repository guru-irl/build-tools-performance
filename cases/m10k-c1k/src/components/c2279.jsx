import React from 'react';
const LABEL_2279 = 'component_2279';
export function Component2279({ value = 2279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2279, 'data-value': derived.doubled }, children);
}
export default Component2279;
