import React from 'react';
const LABEL_31893 = 'component_31893';
export function Component31893({ value = 31893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31893, 'data-value': derived.doubled }, children);
}
export default Component31893;
