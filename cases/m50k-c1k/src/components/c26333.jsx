import React from 'react';
const LABEL_26333 = 'component_26333';
export function Component26333({ value = 26333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26333, 'data-value': derived.doubled }, children);
}
export default Component26333;
