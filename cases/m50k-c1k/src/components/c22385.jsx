import React from 'react';
const LABEL_22385 = 'component_22385';
export function Component22385({ value = 22385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22385, 'data-value': derived.doubled }, children);
}
export default Component22385;
