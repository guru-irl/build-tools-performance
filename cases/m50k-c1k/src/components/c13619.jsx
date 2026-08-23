import React from 'react';
const LABEL_13619 = 'component_13619';
export function Component13619({ value = 13619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13619, 'data-value': derived.doubled }, children);
}
export default Component13619;
