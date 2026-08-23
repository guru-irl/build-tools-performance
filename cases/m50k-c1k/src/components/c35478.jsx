import React from 'react';
const LABEL_35478 = 'component_35478';
export function Component35478({ value = 35478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35478, 'data-value': derived.doubled }, children);
}
export default Component35478;
