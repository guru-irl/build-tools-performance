import React from 'react';
const LABEL_8409 = 'component_8409';
export function Component8409({ value = 8409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8409, 'data-value': derived.doubled }, children);
}
export default Component8409;
