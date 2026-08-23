import React from 'react';
const LABEL_44619 = 'component_44619';
export function Component44619({ value = 44619, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44619, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44619, 'data-value': derived.doubled }, children);
}
export default Component44619;
