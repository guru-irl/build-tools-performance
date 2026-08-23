import React from 'react';
const LABEL_14494 = 'component_14494';
export function Component14494({ value = 14494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14494, 'data-value': derived.doubled }, children);
}
export default Component14494;
