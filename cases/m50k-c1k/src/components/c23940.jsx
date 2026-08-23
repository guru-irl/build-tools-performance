import React from 'react';
const LABEL_23940 = 'component_23940';
export function Component23940({ value = 23940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23940, 'data-value': derived.doubled }, children);
}
export default Component23940;
