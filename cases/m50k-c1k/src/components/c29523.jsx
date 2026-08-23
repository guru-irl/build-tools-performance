import React from 'react';
const LABEL_29523 = 'component_29523';
export function Component29523({ value = 29523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29523, 'data-value': derived.doubled }, children);
}
export default Component29523;
