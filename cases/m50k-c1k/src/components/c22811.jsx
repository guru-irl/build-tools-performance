import React from 'react';
const LABEL_22811 = 'component_22811';
export function Component22811({ value = 22811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22811, 'data-value': derived.doubled }, children);
}
export default Component22811;
