import React from 'react';
const LABEL_25111 = 'component_25111';
export function Component25111({ value = 25111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25111, 'data-value': derived.doubled }, children);
}
export default Component25111;
