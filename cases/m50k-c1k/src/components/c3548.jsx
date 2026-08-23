import React from 'react';
const LABEL_3548 = 'component_3548';
export function Component3548({ value = 3548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3548, 'data-value': derived.doubled }, children);
}
export default Component3548;
