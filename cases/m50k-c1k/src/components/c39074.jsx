import React from 'react';
const LABEL_39074 = 'component_39074';
export function Component39074({ value = 39074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39074, 'data-value': derived.doubled }, children);
}
export default Component39074;
