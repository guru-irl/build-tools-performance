import React from 'react';
const LABEL_14859 = 'component_14859';
export function Component14859({ value = 14859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14859, 'data-value': derived.doubled }, children);
}
export default Component14859;
