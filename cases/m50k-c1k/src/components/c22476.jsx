import React from 'react';
const LABEL_22476 = 'component_22476';
export function Component22476({ value = 22476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22476, 'data-value': derived.doubled }, children);
}
export default Component22476;
