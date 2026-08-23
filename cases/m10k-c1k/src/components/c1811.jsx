import React from 'react';
const LABEL_1811 = 'component_1811';
export function Component1811({ value = 1811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1811, 'data-value': derived.doubled }, children);
}
export default Component1811;
