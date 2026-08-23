import React from 'react';
const LABEL_46811 = 'component_46811';
export function Component46811({ value = 46811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46811, 'data-value': derived.doubled }, children);
}
export default Component46811;
