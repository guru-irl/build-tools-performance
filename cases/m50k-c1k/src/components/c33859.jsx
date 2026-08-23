import React from 'react';
const LABEL_33859 = 'component_33859';
export function Component33859({ value = 33859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33859, 'data-value': derived.doubled }, children);
}
export default Component33859;
