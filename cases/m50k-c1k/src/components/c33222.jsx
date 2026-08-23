import React from 'react';
const LABEL_33222 = 'component_33222';
export function Component33222({ value = 33222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33222, 'data-value': derived.doubled }, children);
}
export default Component33222;
