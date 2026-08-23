import React from 'react';
const LABEL_35326 = 'component_35326';
export function Component35326({ value = 35326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35326, 'data-value': derived.doubled }, children);
}
export default Component35326;
