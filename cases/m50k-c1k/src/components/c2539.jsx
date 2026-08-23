import React from 'react';
const LABEL_2539 = 'component_2539';
export function Component2539({ value = 2539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2539, 'data-value': derived.doubled }, children);
}
export default Component2539;
