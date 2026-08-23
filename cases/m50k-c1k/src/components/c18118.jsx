import React from 'react';
const LABEL_18118 = 'component_18118';
export function Component18118({ value = 18118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18118, 'data-value': derived.doubled }, children);
}
export default Component18118;
