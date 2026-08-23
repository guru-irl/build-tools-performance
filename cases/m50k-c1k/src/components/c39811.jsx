import React from 'react';
const LABEL_39811 = 'component_39811';
export function Component39811({ value = 39811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39811, 'data-value': derived.doubled }, children);
}
export default Component39811;
