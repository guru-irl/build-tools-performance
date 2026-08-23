import React from 'react';
const LABEL_12326 = 'component_12326';
export function Component12326({ value = 12326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12326, 'data-value': derived.doubled }, children);
}
export default Component12326;
