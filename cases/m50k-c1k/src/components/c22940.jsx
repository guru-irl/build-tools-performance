import React from 'react';
const LABEL_22940 = 'component_22940';
export function Component22940({ value = 22940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22940, 'data-value': derived.doubled }, children);
}
export default Component22940;
