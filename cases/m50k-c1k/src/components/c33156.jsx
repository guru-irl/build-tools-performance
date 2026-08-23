import React from 'react';
const LABEL_33156 = 'component_33156';
export function Component33156({ value = 33156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33156, 'data-value': derived.doubled }, children);
}
export default Component33156;
