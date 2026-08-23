import React from 'react';
const LABEL_23772 = 'component_23772';
export function Component23772({ value = 23772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23772, 'data-value': derived.doubled }, children);
}
export default Component23772;
