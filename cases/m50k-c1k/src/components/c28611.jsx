import React from 'react';
const LABEL_28611 = 'component_28611';
export function Component28611({ value = 28611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28611, 'data-value': derived.doubled }, children);
}
export default Component28611;
