import React from 'react';
const LABEL_45476 = 'component_45476';
export function Component45476({ value = 45476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45476, 'data-value': derived.doubled }, children);
}
export default Component45476;
