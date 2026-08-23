import React from 'react';
const LABEL_38811 = 'component_38811';
export function Component38811({ value = 38811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38811, 'data-value': derived.doubled }, children);
}
export default Component38811;
