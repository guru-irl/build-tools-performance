import React from 'react';
const LABEL_33791 = 'component_33791';
export function Component33791({ value = 33791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33791, 'data-value': derived.doubled }, children);
}
export default Component33791;
