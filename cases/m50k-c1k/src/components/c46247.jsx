import React from 'react';
const LABEL_46247 = 'component_46247';
export function Component46247({ value = 46247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46247, 'data-value': derived.doubled }, children);
}
export default Component46247;
