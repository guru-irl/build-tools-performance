import React from 'react';
const LABEL_22548 = 'component_22548';
export function Component22548({ value = 22548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22548, 'data-value': derived.doubled }, children);
}
export default Component22548;
