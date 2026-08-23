import React from 'react';
const LABEL_17722 = 'component_17722';
export function Component17722({ value = 17722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17722, 'data-value': derived.doubled }, children);
}
export default Component17722;
