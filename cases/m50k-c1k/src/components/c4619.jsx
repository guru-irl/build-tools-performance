import React from 'react';
const LABEL_4619 = 'component_4619';
export function Component4619({ value = 4619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4619, 'data-value': derived.doubled }, children);
}
export default Component4619;
