import React from 'react';
const LABEL_23845 = 'component_23845';
export function Component23845({ value = 23845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23845, 'data-value': derived.doubled }, children);
}
export default Component23845;
