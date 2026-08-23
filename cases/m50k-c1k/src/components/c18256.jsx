import React from 'react';
const LABEL_18256 = 'component_18256';
export function Component18256({ value = 18256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18256, 'data-value': derived.doubled }, children);
}
export default Component18256;
