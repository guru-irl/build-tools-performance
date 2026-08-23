import React from 'react';
const LABEL_24341 = 'component_24341';
export function Component24341({ value = 24341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24341, 'data-value': derived.doubled }, children);
}
export default Component24341;
