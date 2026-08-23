import React from 'react';
const LABEL_23242 = 'component_23242';
export function Component23242({ value = 23242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23242, 'data-value': derived.doubled }, children);
}
export default Component23242;
