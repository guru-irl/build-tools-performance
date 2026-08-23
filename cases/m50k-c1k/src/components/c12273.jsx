import React from 'react';
const LABEL_12273 = 'component_12273';
export function Component12273({ value = 12273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12273, 'data-value': derived.doubled }, children);
}
export default Component12273;
