import React from 'react';
const LABEL_12409 = 'component_12409';
export function Component12409({ value = 12409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12409, 'data-value': derived.doubled }, children);
}
export default Component12409;
