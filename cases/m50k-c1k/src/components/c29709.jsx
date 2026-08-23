import React from 'react';
const LABEL_29709 = 'component_29709';
export function Component29709({ value = 29709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29709, 'data-value': derived.doubled }, children);
}
export default Component29709;
