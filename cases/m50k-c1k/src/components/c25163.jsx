import React from 'react';
const LABEL_25163 = 'component_25163';
export function Component25163({ value = 25163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25163, 'data-value': derived.doubled }, children);
}
export default Component25163;
