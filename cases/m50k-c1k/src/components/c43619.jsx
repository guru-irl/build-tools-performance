import React from 'react';
const LABEL_43619 = 'component_43619';
export function Component43619({ value = 43619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43619, 'data-value': derived.doubled }, children);
}
export default Component43619;
