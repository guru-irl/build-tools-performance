import React from 'react';
const LABEL_13548 = 'component_13548';
export function Component13548({ value = 13548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13548, 'data-value': derived.doubled }, children);
}
export default Component13548;
