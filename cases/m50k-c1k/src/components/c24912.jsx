import React from 'react';
const LABEL_24912 = 'component_24912';
export function Component24912({ value = 24912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24912, 'data-value': derived.doubled }, children);
}
export default Component24912;
