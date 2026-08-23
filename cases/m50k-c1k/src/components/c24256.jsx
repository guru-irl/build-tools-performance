import React from 'react';
const LABEL_24256 = 'component_24256';
export function Component24256({ value = 24256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24256, 'data-value': derived.doubled }, children);
}
export default Component24256;
