import React from 'react';
const LABEL_5619 = 'component_5619';
export function Component5619({ value = 5619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5619, 'data-value': derived.doubled }, children);
}
export default Component5619;
