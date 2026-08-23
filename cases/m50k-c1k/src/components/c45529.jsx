import React from 'react';
const LABEL_45529 = 'component_45529';
export function Component45529({ value = 45529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45529, 'data-value': derived.doubled }, children);
}
export default Component45529;
