import React from 'react';
const LABEL_7046 = 'component_7046';
export function Component7046({ value = 7046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7046, 'data-value': derived.doubled }, children);
}
export default Component7046;
