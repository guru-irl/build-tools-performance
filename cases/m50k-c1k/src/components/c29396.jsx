import React from 'react';
const LABEL_29396 = 'component_29396';
export function Component29396({ value = 29396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29396, 'data-value': derived.doubled }, children);
}
export default Component29396;
