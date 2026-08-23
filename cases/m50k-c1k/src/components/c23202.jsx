import React from 'react';
const LABEL_23202 = 'component_23202';
export function Component23202({ value = 23202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23202, 'data-value': derived.doubled }, children);
}
export default Component23202;
