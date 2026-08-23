import React from 'react';
const LABEL_21159 = 'component_21159';
export function Component21159({ value = 21159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21159, 'data-value': derived.doubled }, children);
}
export default Component21159;
