import React from 'react';
const LABEL_16474 = 'component_16474';
export function Component16474({ value = 16474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16474, 'data-value': derived.doubled }, children);
}
export default Component16474;
