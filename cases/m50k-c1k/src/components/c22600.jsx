import React from 'react';
const LABEL_22600 = 'component_22600';
export function Component22600({ value = 22600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22600, 'data-value': derived.doubled }, children);
}
export default Component22600;
