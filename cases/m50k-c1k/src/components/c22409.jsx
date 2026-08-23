import React from 'react';
const LABEL_22409 = 'component_22409';
export function Component22409({ value = 22409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22409, 'data-value': derived.doubled }, children);
}
export default Component22409;
