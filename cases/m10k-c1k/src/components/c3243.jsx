import React from 'react';
const LABEL_3243 = 'component_3243';
export function Component3243({ value = 3243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3243, 'data-value': derived.doubled }, children);
}
export default Component3243;
