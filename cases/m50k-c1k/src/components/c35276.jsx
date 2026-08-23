import React from 'react';
const LABEL_35276 = 'component_35276';
export function Component35276({ value = 35276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35276, 'data-value': derived.doubled }, children);
}
export default Component35276;
