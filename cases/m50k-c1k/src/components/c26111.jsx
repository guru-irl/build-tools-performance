import React from 'react';
const LABEL_26111 = 'component_26111';
export function Component26111({ value = 26111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26111, 'data-value': derived.doubled }, children);
}
export default Component26111;
