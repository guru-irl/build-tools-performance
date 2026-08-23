import React from 'react';
const LABEL_25218 = 'component_25218';
export function Component25218({ value = 25218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25218, 'data-value': derived.doubled }, children);
}
export default Component25218;
