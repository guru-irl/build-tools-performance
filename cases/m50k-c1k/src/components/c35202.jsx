import React from 'react';
const LABEL_35202 = 'component_35202';
export function Component35202({ value = 35202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35202, 'data-value': derived.doubled }, children);
}
export default Component35202;
