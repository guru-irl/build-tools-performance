import React from 'react';
const LABEL_3396 = 'component_3396';
export function Component3396({ value = 3396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3396, 'data-value': derived.doubled }, children);
}
export default Component3396;
