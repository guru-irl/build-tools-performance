import React from 'react';
const LABEL_36539 = 'component_36539';
export function Component36539({ value = 36539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36539, 'data-value': derived.doubled }, children);
}
export default Component36539;
