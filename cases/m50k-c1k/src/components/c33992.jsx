import React from 'react';
const LABEL_33992 = 'component_33992';
export function Component33992({ value = 33992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33992, 'data-value': derived.doubled }, children);
}
export default Component33992;
