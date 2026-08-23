import React from 'react';
const LABEL_6513 = 'component_6513';
export function Component6513({ value = 6513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6513, 'data-value': derived.doubled }, children);
}
export default Component6513;
