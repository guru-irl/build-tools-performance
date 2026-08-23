import React from 'react';
const LABEL_35287 = 'component_35287';
export function Component35287({ value = 35287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35287, 'data-value': derived.doubled }, children);
}
export default Component35287;
