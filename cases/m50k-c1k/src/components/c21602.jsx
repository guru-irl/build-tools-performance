import React from 'react';
const LABEL_21602 = 'component_21602';
export function Component21602({ value = 21602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21602, 'data-value': derived.doubled }, children);
}
export default Component21602;
