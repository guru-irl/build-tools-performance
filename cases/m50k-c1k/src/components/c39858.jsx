import React from 'react';
const LABEL_39858 = 'component_39858';
export function Component39858({ value = 39858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39858, 'data-value': derived.doubled }, children);
}
export default Component39858;
