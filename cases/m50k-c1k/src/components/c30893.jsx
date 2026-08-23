import React from 'react';
const LABEL_30893 = 'component_30893';
export function Component30893({ value = 30893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30893, 'data-value': derived.doubled }, children);
}
export default Component30893;
