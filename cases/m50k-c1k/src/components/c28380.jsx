import React from 'react';
const LABEL_28380 = 'component_28380';
export function Component28380({ value = 28380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28380, 'data-value': derived.doubled }, children);
}
export default Component28380;
