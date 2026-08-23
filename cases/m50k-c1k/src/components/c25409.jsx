import React from 'react';
const LABEL_25409 = 'component_25409';
export function Component25409({ value = 25409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25409, 'data-value': derived.doubled }, children);
}
export default Component25409;
