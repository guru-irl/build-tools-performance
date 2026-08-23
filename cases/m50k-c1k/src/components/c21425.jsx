import React from 'react';
const LABEL_21425 = 'component_21425';
export function Component21425({ value = 21425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21425, 'data-value': derived.doubled }, children);
}
export default Component21425;
