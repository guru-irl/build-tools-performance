import React from 'react';
const LABEL_40268 = 'component_40268';
export function Component40268({ value = 40268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40268, 'data-value': derived.doubled }, children);
}
export default Component40268;
