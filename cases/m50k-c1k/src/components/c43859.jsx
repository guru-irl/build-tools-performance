import React from 'react';
const LABEL_43859 = 'component_43859';
export function Component43859({ value = 43859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43859, 'data-value': derived.doubled }, children);
}
export default Component43859;
