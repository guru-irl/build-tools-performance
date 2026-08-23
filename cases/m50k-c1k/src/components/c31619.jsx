import React from 'react';
const LABEL_31619 = 'component_31619';
export function Component31619({ value = 31619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31619, 'data-value': derived.doubled }, children);
}
export default Component31619;
