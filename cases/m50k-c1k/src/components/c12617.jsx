import React from 'react';
const LABEL_12617 = 'component_12617';
export function Component12617({ value = 12617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12617, 'data-value': derived.doubled }, children);
}
export default Component12617;
