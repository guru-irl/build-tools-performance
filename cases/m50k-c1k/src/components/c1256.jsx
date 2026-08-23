import React from 'react';
const LABEL_1256 = 'component_1256';
export function Component1256({ value = 1256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1256, 'data-value': derived.doubled }, children);
}
export default Component1256;
