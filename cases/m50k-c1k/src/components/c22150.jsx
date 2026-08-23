import React from 'react';
const LABEL_22150 = 'component_22150';
export function Component22150({ value = 22150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22150, 'data-value': derived.doubled }, children);
}
export default Component22150;
