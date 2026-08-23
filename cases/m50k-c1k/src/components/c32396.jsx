import React from 'react';
const LABEL_32396 = 'component_32396';
export function Component32396({ value = 32396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32396, 'data-value': derived.doubled }, children);
}
export default Component32396;
