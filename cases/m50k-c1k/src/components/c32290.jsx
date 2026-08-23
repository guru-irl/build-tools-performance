import React from 'react';
const LABEL_32290 = 'component_32290';
export function Component32290({ value = 32290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32290, 'data-value': derived.doubled }, children);
}
export default Component32290;
