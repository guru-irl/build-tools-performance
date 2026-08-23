import React from 'react';
const LABEL_35369 = 'component_35369';
export function Component35369({ value = 35369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35369, 'data-value': derived.doubled }, children);
}
export default Component35369;
