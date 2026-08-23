import React from 'react';
const LABEL_33250 = 'component_33250';
export function Component33250({ value = 33250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33250, 'data-value': derived.doubled }, children);
}
export default Component33250;
