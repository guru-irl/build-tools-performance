import React from 'react';
const LABEL_33126 = 'component_33126';
export function Component33126({ value = 33126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33126, 'data-value': derived.doubled }, children);
}
export default Component33126;
