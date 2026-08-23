import React from 'react';
const LABEL_39636 = 'component_39636';
export function Component39636({ value = 39636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39636, 'data-value': derived.doubled }, children);
}
export default Component39636;
