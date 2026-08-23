import React from 'react';
const LABEL_396 = 'component_396';
export function Component396({ value = 396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_396, 'data-value': derived.doubled }, children);
}
export default Component396;
