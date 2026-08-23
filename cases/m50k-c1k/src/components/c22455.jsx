import React from 'react';
const LABEL_22455 = 'component_22455';
export function Component22455({ value = 22455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22455, 'data-value': derived.doubled }, children);
}
export default Component22455;
