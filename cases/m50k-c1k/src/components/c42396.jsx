import React from 'react';
const LABEL_42396 = 'component_42396';
export function Component42396({ value = 42396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42396, 'data-value': derived.doubled }, children);
}
export default Component42396;
