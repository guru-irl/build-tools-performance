import React from 'react';
const LABEL_859 = 'component_859';
export function Component859({ value = 859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_859, 'data-value': derived.doubled }, children);
}
export default Component859;
