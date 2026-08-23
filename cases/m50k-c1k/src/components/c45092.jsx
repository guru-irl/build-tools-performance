import React from 'react';
const LABEL_45092 = 'component_45092';
export function Component45092({ value = 45092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45092, 'data-value': derived.doubled }, children);
}
export default Component45092;
