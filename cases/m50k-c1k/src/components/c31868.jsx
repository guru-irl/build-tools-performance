import React from 'react';
const LABEL_31868 = 'component_31868';
export function Component31868({ value = 31868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31868, 'data-value': derived.doubled }, children);
}
export default Component31868;
