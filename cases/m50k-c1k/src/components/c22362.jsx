import React from 'react';
const LABEL_22362 = 'component_22362';
export function Component22362({ value = 22362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22362, 'data-value': derived.doubled }, children);
}
export default Component22362;
