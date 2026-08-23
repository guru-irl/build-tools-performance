import React from 'react';
const LABEL_12861 = 'component_12861';
export function Component12861({ value = 12861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12861, 'data-value': derived.doubled }, children);
}
export default Component12861;
