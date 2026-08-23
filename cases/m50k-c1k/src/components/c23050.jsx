import React from 'react';
const LABEL_23050 = 'component_23050';
export function Component23050({ value = 23050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23050, 'data-value': derived.doubled }, children);
}
export default Component23050;
