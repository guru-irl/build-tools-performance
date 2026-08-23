import React from 'react';
const LABEL_5341 = 'component_5341';
export function Component5341({ value = 5341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5341, 'data-value': derived.doubled }, children);
}
export default Component5341;
