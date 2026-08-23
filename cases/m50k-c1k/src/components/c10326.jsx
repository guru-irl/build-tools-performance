import React from 'react';
const LABEL_10326 = 'component_10326';
export function Component10326({ value = 10326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10326, 'data-value': derived.doubled }, children);
}
export default Component10326;
