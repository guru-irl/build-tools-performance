import React from 'react';
const LABEL_7918 = 'component_7918';
export function Component7918({ value = 7918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7918, 'data-value': derived.doubled }, children);
}
export default Component7918;
