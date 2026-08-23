import React from 'react';
const LABEL_940 = 'component_940';
export function Component940({ value = 940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_940, 'data-value': derived.doubled }, children);
}
export default Component940;
