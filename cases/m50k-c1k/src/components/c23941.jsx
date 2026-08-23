import React from 'react';
const LABEL_23941 = 'component_23941';
export function Component23941({ value = 23941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23941, 'data-value': derived.doubled }, children);
}
export default Component23941;
