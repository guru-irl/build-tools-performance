import React from 'react';
const LABEL_10718 = 'component_10718';
export function Component10718({ value = 10718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10718, 'data-value': derived.doubled }, children);
}
export default Component10718;
