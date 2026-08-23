import React from 'react';
const LABEL_21218 = 'component_21218';
export function Component21218({ value = 21218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21218, 'data-value': derived.doubled }, children);
}
export default Component21218;
