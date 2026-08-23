import React from 'react';
const LABEL_34811 = 'component_34811';
export function Component34811({ value = 34811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34811, 'data-value': derived.doubled }, children);
}
export default Component34811;
