import React from 'react';
const LABEL_15256 = 'component_15256';
export function Component15256({ value = 15256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15256, 'data-value': derived.doubled }, children);
}
export default Component15256;
