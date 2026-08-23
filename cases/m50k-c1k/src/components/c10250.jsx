import React from 'react';
const LABEL_10250 = 'component_10250';
export function Component10250({ value = 10250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10250, 'data-value': derived.doubled }, children);
}
export default Component10250;
