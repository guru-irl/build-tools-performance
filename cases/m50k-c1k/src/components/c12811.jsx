import React from 'react';
const LABEL_12811 = 'component_12811';
export function Component12811({ value = 12811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12811, 'data-value': derived.doubled }, children);
}
export default Component12811;
