import React from 'react';
const LABEL_15940 = 'component_15940';
export function Component15940({ value = 15940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15940, 'data-value': derived.doubled }, children);
}
export default Component15940;
