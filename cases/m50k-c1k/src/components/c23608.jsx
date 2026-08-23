import React from 'react';
const LABEL_23608 = 'component_23608';
export function Component23608({ value = 23608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23608, 'data-value': derived.doubled }, children);
}
export default Component23608;
