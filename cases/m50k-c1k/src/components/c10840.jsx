import React from 'react';
const LABEL_10840 = 'component_10840';
export function Component10840({ value = 10840, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10840, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10840, 'data-value': derived.doubled }, children);
}
export default Component10840;
