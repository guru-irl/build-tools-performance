import React from 'react';
const LABEL_20326 = 'component_20326';
export function Component20326({ value = 20326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20326, 'data-value': derived.doubled }, children);
}
export default Component20326;
