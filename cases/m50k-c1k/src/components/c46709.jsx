import React from 'react';
const LABEL_46709 = 'component_46709';
export function Component46709({ value = 46709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46709, 'data-value': derived.doubled }, children);
}
export default Component46709;
