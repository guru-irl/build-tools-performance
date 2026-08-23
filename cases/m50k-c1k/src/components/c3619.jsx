import React from 'react';
const LABEL_3619 = 'component_3619';
export function Component3619({ value = 3619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3619, 'data-value': derived.doubled }, children);
}
export default Component3619;
