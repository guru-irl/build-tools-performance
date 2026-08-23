import React from 'react';
const LABEL_21548 = 'component_21548';
export function Component21548({ value = 21548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21548, 'data-value': derived.doubled }, children);
}
export default Component21548;
