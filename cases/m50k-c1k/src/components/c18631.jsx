import React from 'react';
const LABEL_18631 = 'component_18631';
export function Component18631({ value = 18631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18631, 'data-value': derived.doubled }, children);
}
export default Component18631;
