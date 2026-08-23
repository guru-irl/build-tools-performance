import React from 'react';
const LABEL_22256 = 'component_22256';
export function Component22256({ value = 22256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22256, 'data-value': derived.doubled }, children);
}
export default Component22256;
