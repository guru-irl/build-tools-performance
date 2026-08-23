import React from 'react';
const LABEL_29619 = 'component_29619';
export function Component29619({ value = 29619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29619, 'data-value': derived.doubled }, children);
}
export default Component29619;
