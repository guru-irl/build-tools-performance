import React from 'react';
const LABEL_46081 = 'component_46081';
export function Component46081({ value = 46081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46081, 'data-value': derived.doubled }, children);
}
export default Component46081;
