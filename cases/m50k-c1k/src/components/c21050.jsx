import React from 'react';
const LABEL_21050 = 'component_21050';
export function Component21050({ value = 21050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21050, 'data-value': derived.doubled }, children);
}
export default Component21050;
