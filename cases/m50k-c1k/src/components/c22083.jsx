import React from 'react';
const LABEL_22083 = 'component_22083';
export function Component22083({ value = 22083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22083, 'data-value': derived.doubled }, children);
}
export default Component22083;
