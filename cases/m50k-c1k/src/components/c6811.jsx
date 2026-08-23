import React from 'react';
const LABEL_6811 = 'component_6811';
export function Component6811({ value = 6811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6811, 'data-value': derived.doubled }, children);
}
export default Component6811;
