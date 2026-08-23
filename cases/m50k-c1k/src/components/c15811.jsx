import React from 'react';
const LABEL_15811 = 'component_15811';
export function Component15811({ value = 15811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15811, 'data-value': derived.doubled }, children);
}
export default Component15811;
