import React from 'react';
const LABEL_409 = 'component_409';
export function Component409({ value = 409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_409, 'data-value': derived.doubled }, children);
}
export default Component409;
