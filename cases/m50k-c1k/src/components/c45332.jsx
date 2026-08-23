import React from 'react';
const LABEL_45332 = 'component_45332';
export function Component45332({ value = 45332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45332, 'data-value': derived.doubled }, children);
}
export default Component45332;
