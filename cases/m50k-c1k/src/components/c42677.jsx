import React from 'react';
const LABEL_42677 = 'component_42677';
export function Component42677({ value = 42677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42677, 'data-value': derived.doubled }, children);
}
export default Component42677;
