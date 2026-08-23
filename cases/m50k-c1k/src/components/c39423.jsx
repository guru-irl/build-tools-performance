import React from 'react';
const LABEL_39423 = 'component_39423';
export function Component39423({ value = 39423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39423, 'data-value': derived.doubled }, children);
}
export default Component39423;
