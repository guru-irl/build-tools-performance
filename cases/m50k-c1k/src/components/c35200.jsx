import React from 'react';
const LABEL_35200 = 'component_35200';
export function Component35200({ value = 35200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35200, 'data-value': derived.doubled }, children);
}
export default Component35200;
