import React from 'react';
const LABEL_15548 = 'component_15548';
export function Component15548({ value = 15548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15548, 'data-value': derived.doubled }, children);
}
export default Component15548;
