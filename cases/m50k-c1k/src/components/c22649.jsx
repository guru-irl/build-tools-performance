import React from 'react';
const LABEL_22649 = 'component_22649';
export function Component22649({ value = 22649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22649, 'data-value': derived.doubled }, children);
}
export default Component22649;
