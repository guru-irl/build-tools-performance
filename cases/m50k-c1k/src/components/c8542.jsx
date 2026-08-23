import React from 'react';
const LABEL_8542 = 'component_8542';
export function Component8542({ value = 8542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8542, 'data-value': derived.doubled }, children);
}
export default Component8542;
