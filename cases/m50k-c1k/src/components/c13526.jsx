import React from 'react';
const LABEL_13526 = 'component_13526';
export function Component13526({ value = 13526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13526, 'data-value': derived.doubled }, children);
}
export default Component13526;
