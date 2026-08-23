import React from 'react';
const LABEL_33327 = 'component_33327';
export function Component33327({ value = 33327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33327, 'data-value': derived.doubled }, children);
}
export default Component33327;
