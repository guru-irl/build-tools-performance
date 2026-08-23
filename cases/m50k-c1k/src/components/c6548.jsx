import React from 'react';
const LABEL_6548 = 'component_6548';
export function Component6548({ value = 6548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6548, 'data-value': derived.doubled }, children);
}
export default Component6548;
