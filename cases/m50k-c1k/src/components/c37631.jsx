import React from 'react';
const LABEL_37631 = 'component_37631';
export function Component37631({ value = 37631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37631, 'data-value': derived.doubled }, children);
}
export default Component37631;
