import React from 'react';
const LABEL_7859 = 'component_7859';
export function Component7859({ value = 7859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7859, 'data-value': derived.doubled }, children);
}
export default Component7859;
