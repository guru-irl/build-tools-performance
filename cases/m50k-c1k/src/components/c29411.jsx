import React from 'react';
const LABEL_29411 = 'component_29411';
export function Component29411({ value = 29411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29411, 'data-value': derived.doubled }, children);
}
export default Component29411;
