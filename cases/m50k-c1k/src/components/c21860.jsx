import React from 'react';
const LABEL_21860 = 'component_21860';
export function Component21860({ value = 21860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21860, 'data-value': derived.doubled }, children);
}
export default Component21860;
