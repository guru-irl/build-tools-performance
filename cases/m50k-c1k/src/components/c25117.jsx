import React from 'react';
const LABEL_25117 = 'component_25117';
export function Component25117({ value = 25117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25117, 'data-value': derived.doubled }, children);
}
export default Component25117;
