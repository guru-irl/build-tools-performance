import React from 'react';
const LABEL_46517 = 'component_46517';
export function Component46517({ value = 46517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46517, 'data-value': derived.doubled }, children);
}
export default Component46517;
