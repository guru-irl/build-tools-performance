import React from 'react';
const LABEL_16503 = 'component_16503';
export function Component16503({ value = 16503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16503, 'data-value': derived.doubled }, children);
}
export default Component16503;
