import React from 'react';
const LABEL_12296 = 'component_12296';
export function Component12296({ value = 12296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12296, 'data-value': derived.doubled }, children);
}
export default Component12296;
