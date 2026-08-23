import React from 'react';
const LABEL_26859 = 'component_26859';
export function Component26859({ value = 26859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26859, 'data-value': derived.doubled }, children);
}
export default Component26859;
