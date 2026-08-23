import React from 'react';
const LABEL_22077 = 'component_22077';
export function Component22077({ value = 22077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22077, 'data-value': derived.doubled }, children);
}
export default Component22077;
