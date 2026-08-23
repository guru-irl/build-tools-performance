import React from 'react';
const LABEL_36351 = 'component_36351';
export function Component36351({ value = 36351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36351, 'data-value': derived.doubled }, children);
}
export default Component36351;
