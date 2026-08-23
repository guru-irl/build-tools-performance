import React from 'react';
const LABEL_2677 = 'component_2677';
export function Component2677({ value = 2677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2677, 'data-value': derived.doubled }, children);
}
export default Component2677;
