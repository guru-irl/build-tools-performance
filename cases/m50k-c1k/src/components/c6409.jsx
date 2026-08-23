import React from 'react';
const LABEL_6409 = 'component_6409';
export function Component6409({ value = 6409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6409, 'data-value': derived.doubled }, children);
}
export default Component6409;
