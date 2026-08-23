import React from 'react';
const LABEL_2583 = 'component_2583';
export function Component2583({ value = 2583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2583, 'data-value': derived.doubled }, children);
}
export default Component2583;
