import React from 'react';
const LABEL_26990 = 'component_26990';
export function Component26990({ value = 26990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26990, 'data-value': derived.doubled }, children);
}
export default Component26990;
