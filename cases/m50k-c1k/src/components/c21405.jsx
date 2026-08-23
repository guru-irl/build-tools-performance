import React from 'react';
const LABEL_21405 = 'component_21405';
export function Component21405({ value = 21405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21405, 'data-value': derived.doubled }, children);
}
export default Component21405;
