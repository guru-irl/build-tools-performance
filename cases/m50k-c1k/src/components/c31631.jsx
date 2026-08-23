import React from 'react';
const LABEL_31631 = 'component_31631';
export function Component31631({ value = 31631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31631, 'data-value': derived.doubled }, children);
}
export default Component31631;
