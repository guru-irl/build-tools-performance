import React from 'react';
const LABEL_43709 = 'component_43709';
export function Component43709({ value = 43709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43709, 'data-value': derived.doubled }, children);
}
export default Component43709;
