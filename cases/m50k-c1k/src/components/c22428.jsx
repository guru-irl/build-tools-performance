import React from 'react';
const LABEL_22428 = 'component_22428';
export function Component22428({ value = 22428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22428, 'data-value': derived.doubled }, children);
}
export default Component22428;
