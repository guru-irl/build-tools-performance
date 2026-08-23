import React from 'react';
const LABEL_35043 = 'component_35043';
export function Component35043({ value = 35043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35043, 'data-value': derived.doubled }, children);
}
export default Component35043;
