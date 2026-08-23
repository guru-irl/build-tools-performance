import React from 'react';
const LABEL_12377 = 'component_12377';
export function Component12377({ value = 12377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12377, 'data-value': derived.doubled }, children);
}
export default Component12377;
