import React from 'react';
const LABEL_2111 = 'component_2111';
export function Component2111({ value = 2111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2111, 'data-value': derived.doubled }, children);
}
export default Component2111;
