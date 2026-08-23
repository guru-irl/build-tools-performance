import React from 'react';
const LABEL_11619 = 'component_11619';
export function Component11619({ value = 11619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11619, 'data-value': derived.doubled }, children);
}
export default Component11619;
