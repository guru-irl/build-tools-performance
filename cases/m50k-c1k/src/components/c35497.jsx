import React from 'react';
const LABEL_35497 = 'component_35497';
export function Component35497({ value = 35497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35497, 'data-value': derived.doubled }, children);
}
export default Component35497;
