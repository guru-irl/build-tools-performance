import React from 'react';
const LABEL_23475 = 'component_23475';
export function Component23475({ value = 23475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23475, 'data-value': derived.doubled }, children);
}
export default Component23475;
