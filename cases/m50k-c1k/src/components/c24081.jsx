import React from 'react';
const LABEL_24081 = 'component_24081';
export function Component24081({ value = 24081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24081, 'data-value': derived.doubled }, children);
}
export default Component24081;
