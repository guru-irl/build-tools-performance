import React from 'react';
const LABEL_35396 = 'component_35396';
export function Component35396({ value = 35396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35396, 'data-value': derived.doubled }, children);
}
export default Component35396;
