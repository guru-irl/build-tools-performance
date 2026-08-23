import React from 'react';
const LABEL_7453 = 'component_7453';
export function Component7453({ value = 7453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7453, 'data-value': derived.doubled }, children);
}
export default Component7453;
