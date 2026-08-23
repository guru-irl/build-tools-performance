import React from 'react';
const LABEL_33811 = 'component_33811';
export function Component33811({ value = 33811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33811, 'data-value': derived.doubled }, children);
}
export default Component33811;
