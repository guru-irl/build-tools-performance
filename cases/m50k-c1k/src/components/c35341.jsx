import React from 'react';
const LABEL_35341 = 'component_35341';
export function Component35341({ value = 35341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35341, 'data-value': derived.doubled }, children);
}
export default Component35341;
