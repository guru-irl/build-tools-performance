import React from 'react';
const LABEL_21859 = 'component_21859';
export function Component21859({ value = 21859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21859, 'data-value': derived.doubled }, children);
}
export default Component21859;
