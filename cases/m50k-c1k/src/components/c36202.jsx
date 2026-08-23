import React from 'react';
const LABEL_36202 = 'component_36202';
export function Component36202({ value = 36202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36202, 'data-value': derived.doubled }, children);
}
export default Component36202;
