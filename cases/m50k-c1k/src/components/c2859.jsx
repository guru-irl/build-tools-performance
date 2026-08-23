import React from 'react';
const LABEL_2859 = 'component_2859';
export function Component2859({ value = 2859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2859, 'data-value': derived.doubled }, children);
}
export default Component2859;
