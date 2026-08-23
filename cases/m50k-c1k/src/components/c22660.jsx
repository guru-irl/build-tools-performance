import React from 'react';
const LABEL_22660 = 'component_22660';
export function Component22660({ value = 22660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22660, 'data-value': derived.doubled }, children);
}
export default Component22660;
