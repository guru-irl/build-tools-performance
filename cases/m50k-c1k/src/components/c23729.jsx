import React from 'react';
const LABEL_23729 = 'component_23729';
export function Component23729({ value = 23729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23729, 'data-value': derived.doubled }, children);
}
export default Component23729;
