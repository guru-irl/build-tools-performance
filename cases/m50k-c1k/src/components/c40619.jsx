import React from 'react';
const LABEL_40619 = 'component_40619';
export function Component40619({ value = 40619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40619, 'data-value': derived.doubled }, children);
}
export default Component40619;
