import React from 'react';
const LABEL_46859 = 'component_46859';
export function Component46859({ value = 46859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46859, 'data-value': derived.doubled }, children);
}
export default Component46859;
