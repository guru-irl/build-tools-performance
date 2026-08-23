import React from 'react';
const LABEL_11811 = 'component_11811';
export function Component11811({ value = 11811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11811, 'data-value': derived.doubled }, children);
}
export default Component11811;
