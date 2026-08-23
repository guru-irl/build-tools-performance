import React from 'react';
const LABEL_24002 = 'component_24002';
export function Component24002({ value = 24002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24002, 'data-value': derived.doubled }, children);
}
export default Component24002;
