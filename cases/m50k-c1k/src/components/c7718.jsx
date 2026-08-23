import React from 'react';
const LABEL_7718 = 'component_7718';
export function Component7718({ value = 7718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7718, 'data-value': derived.doubled }, children);
}
export default Component7718;
