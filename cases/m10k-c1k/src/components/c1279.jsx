import React from 'react';
const LABEL_1279 = 'component_1279';
export function Component1279({ value = 1279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1279, 'data-value': derived.doubled }, children);
}
export default Component1279;
