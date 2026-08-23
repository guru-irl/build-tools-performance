import React from 'react';
const LABEL_5811 = 'component_5811';
export function Component5811({ value = 5811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5811, 'data-value': derived.doubled }, children);
}
export default Component5811;
