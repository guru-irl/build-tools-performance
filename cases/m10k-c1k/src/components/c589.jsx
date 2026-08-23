import React from 'react';
const LABEL_589 = 'component_589';
export function Component589({ value = 589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_589, 'data-value': derived.doubled }, children);
}
export default Component589;
