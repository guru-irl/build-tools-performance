import React from 'react';
const LABEL_31167 = 'component_31167';
export function Component31167({ value = 31167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31167, 'data-value': derived.doubled }, children);
}
export default Component31167;
