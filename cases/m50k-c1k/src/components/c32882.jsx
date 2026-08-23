import React from 'react';
const LABEL_32882 = 'component_32882';
export function Component32882({ value = 32882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32882, 'data-value': derived.doubled }, children);
}
export default Component32882;
