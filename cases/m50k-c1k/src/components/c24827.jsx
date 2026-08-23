import React from 'react';
const LABEL_24827 = 'component_24827';
export function Component24827({ value = 24827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24827, 'data-value': derived.doubled }, children);
}
export default Component24827;
