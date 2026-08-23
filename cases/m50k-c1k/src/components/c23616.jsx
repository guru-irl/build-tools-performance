import React from 'react';
const LABEL_23616 = 'component_23616';
export function Component23616({ value = 23616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23616, 'data-value': derived.doubled }, children);
}
export default Component23616;
