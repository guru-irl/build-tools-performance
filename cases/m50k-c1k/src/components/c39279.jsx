import React from 'react';
const LABEL_39279 = 'component_39279';
export function Component39279({ value = 39279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39279, 'data-value': derived.doubled }, children);
}
export default Component39279;
