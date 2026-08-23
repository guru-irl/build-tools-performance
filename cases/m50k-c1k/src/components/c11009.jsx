import React from 'react';
const LABEL_11009 = 'component_11009';
export function Component11009({ value = 11009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11009, 'data-value': derived.doubled }, children);
}
export default Component11009;
