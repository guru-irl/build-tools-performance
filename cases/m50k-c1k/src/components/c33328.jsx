import React from 'react';
const LABEL_33328 = 'component_33328';
export function Component33328({ value = 33328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33328, 'data-value': derived.doubled }, children);
}
export default Component33328;
