import React from 'react';
const LABEL_36256 = 'component_36256';
export function Component36256({ value = 36256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36256, 'data-value': derived.doubled }, children);
}
export default Component36256;
