import React from 'react';
const LABEL_3296 = 'component_3296';
export function Component3296({ value = 3296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3296, 'data-value': derived.doubled }, children);
}
export default Component3296;
