import React from 'react';
const LABEL_6859 = 'component_6859';
export function Component6859({ value = 6859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6859, 'data-value': derived.doubled }, children);
}
export default Component6859;
