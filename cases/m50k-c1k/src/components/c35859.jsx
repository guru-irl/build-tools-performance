import React from 'react';
const LABEL_35859 = 'component_35859';
export function Component35859({ value = 35859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35859, 'data-value': derived.doubled }, children);
}
export default Component35859;
