import React from 'react';
const LABEL_13 = 'component_13';
export function Component13({ value = 13, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13, 'data-value': derived.doubled }, children);
}
export default Component13;
