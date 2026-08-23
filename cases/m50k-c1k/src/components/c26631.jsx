import React from 'react';
const LABEL_26631 = 'component_26631';
export function Component26631({ value = 26631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26631, 'data-value': derived.doubled }, children);
}
export default Component26631;
