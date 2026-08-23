import React from 'react';
const LABEL_6256 = 'component_6256';
export function Component6256({ value = 6256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6256, 'data-value': derived.doubled }, children);
}
export default Component6256;
