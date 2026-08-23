import React from 'react';
const LABEL_12824 = 'component_12824';
export function Component12824({ value = 12824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12824, 'data-value': derived.doubled }, children);
}
export default Component12824;
