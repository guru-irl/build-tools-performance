import React from 'react';
const LABEL_25619 = 'component_25619';
export function Component25619({ value = 25619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25619, 'data-value': derived.doubled }, children);
}
export default Component25619;
