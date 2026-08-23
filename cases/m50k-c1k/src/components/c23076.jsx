import React from 'react';
const LABEL_23076 = 'component_23076';
export function Component23076({ value = 23076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23076, 'data-value': derived.doubled }, children);
}
export default Component23076;
