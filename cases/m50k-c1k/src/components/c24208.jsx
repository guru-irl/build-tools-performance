import React from 'react';
const LABEL_24208 = 'component_24208';
export function Component24208({ value = 24208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24208, 'data-value': derived.doubled }, children);
}
export default Component24208;
