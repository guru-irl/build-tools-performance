import React from 'react';
const LABEL_46156 = 'component_46156';
export function Component46156({ value = 46156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46156, 'data-value': derived.doubled }, children);
}
export default Component46156;
