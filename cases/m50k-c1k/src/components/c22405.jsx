import React from 'react';
const LABEL_22405 = 'component_22405';
export function Component22405({ value = 22405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22405, 'data-value': derived.doubled }, children);
}
export default Component22405;
