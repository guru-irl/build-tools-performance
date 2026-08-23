import React from 'react';
const LABEL_36619 = 'component_36619';
export function Component36619({ value = 36619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36619, 'data-value': derived.doubled }, children);
}
export default Component36619;
