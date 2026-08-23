import React from 'react';
const LABEL_22103 = 'component_22103';
export function Component22103({ value = 22103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22103, 'data-value': derived.doubled }, children);
}
export default Component22103;
