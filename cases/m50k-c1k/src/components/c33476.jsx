import React from 'react';
const LABEL_33476 = 'component_33476';
export function Component33476({ value = 33476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33476, 'data-value': derived.doubled }, children);
}
export default Component33476;
