import React from 'react';
const LABEL_13497 = 'component_13497';
export function Component13497({ value = 13497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13497, 'data-value': derived.doubled }, children);
}
export default Component13497;
