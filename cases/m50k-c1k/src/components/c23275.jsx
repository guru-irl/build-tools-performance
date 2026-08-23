import React from 'react';
const LABEL_23275 = 'component_23275';
export function Component23275({ value = 23275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23275, 'data-value': derived.doubled }, children);
}
export default Component23275;
