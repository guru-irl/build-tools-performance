import React from 'react';
const LABEL_5174 = 'component_5174';
export function Component5174({ value = 5174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5174, 'data-value': derived.doubled }, children);
}
export default Component5174;
