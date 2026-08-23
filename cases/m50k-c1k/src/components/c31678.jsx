import React from 'react';
const LABEL_31678 = 'component_31678';
export function Component31678({ value = 31678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31678, 'data-value': derived.doubled }, children);
}
export default Component31678;
