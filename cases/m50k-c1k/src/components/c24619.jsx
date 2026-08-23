import React from 'react';
const LABEL_24619 = 'component_24619';
export function Component24619({ value = 24619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24619, 'data-value': derived.doubled }, children);
}
export default Component24619;
