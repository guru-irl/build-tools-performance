import React from 'react';
const LABEL_30372 = 'component_30372';
export function Component30372({ value = 30372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30372, 'data-value': derived.doubled }, children);
}
export default Component30372;
