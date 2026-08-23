import React from 'react';
const LABEL_33659 = 'component_33659';
export function Component33659({ value = 33659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33659, 'data-value': derived.doubled }, children);
}
export default Component33659;
