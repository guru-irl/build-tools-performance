import React from 'react';
const LABEL_10156 = 'component_10156';
export function Component10156({ value = 10156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10156, 'data-value': derived.doubled }, children);
}
export default Component10156;
