import React from 'react';
const LABEL_22211 = 'component_22211';
export function Component22211({ value = 22211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22211, 'data-value': derived.doubled }, children);
}
export default Component22211;
