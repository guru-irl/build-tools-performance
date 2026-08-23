import React from 'react';
const LABEL_26619 = 'component_26619';
export function Component26619({ value = 26619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26619, 'data-value': derived.doubled }, children);
}
export default Component26619;
