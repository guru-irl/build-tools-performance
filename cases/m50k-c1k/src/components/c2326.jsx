import React from 'react';
const LABEL_2326 = 'component_2326';
export function Component2326({ value = 2326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2326, 'data-value': derived.doubled }, children);
}
export default Component2326;
