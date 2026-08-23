import React from 'react';
const LABEL_2407 = 'component_2407';
export function Component2407({ value = 2407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2407, 'data-value': derived.doubled }, children);
}
export default Component2407;
