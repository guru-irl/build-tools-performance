import React from 'react';
const LABEL_35379 = 'component_35379';
export function Component35379({ value = 35379, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35379, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35379, 'data-value': derived.doubled }, children);
}
export default Component35379;
