import React from 'react';
const LABEL_2222 = 'component_2222';
export function Component2222({ value = 2222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2222, 'data-value': derived.doubled }, children);
}
export default Component2222;
