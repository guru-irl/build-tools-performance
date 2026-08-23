import React from 'react';
const LABEL_21585 = 'component_21585';
export function Component21585({ value = 21585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21585, 'data-value': derived.doubled }, children);
}
export default Component21585;
