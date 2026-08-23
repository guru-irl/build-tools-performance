import React from 'react';
const LABEL_24476 = 'component_24476';
export function Component24476({ value = 24476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24476, 'data-value': derived.doubled }, children);
}
export default Component24476;
