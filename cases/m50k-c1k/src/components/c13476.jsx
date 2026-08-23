import React from 'react';
const LABEL_13476 = 'component_13476';
export function Component13476({ value = 13476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13476, 'data-value': derived.doubled }, children);
}
export default Component13476;
