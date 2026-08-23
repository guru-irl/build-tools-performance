import React from 'react';
const LABEL_33916 = 'component_33916';
export function Component33916({ value = 33916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33916, 'data-value': derived.doubled }, children);
}
export default Component33916;
