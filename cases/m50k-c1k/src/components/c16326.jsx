import React from 'react';
const LABEL_16326 = 'component_16326';
export function Component16326({ value = 16326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16326, 'data-value': derived.doubled }, children);
}
export default Component16326;
