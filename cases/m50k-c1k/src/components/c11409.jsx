import React from 'react';
const LABEL_11409 = 'component_11409';
export function Component11409({ value = 11409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11409, 'data-value': derived.doubled }, children);
}
export default Component11409;
