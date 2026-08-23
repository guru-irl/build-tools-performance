import React from 'react';
const LABEL_8287 = 'component_8287';
export function Component8287({ value = 8287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8287, 'data-value': derived.doubled }, children);
}
export default Component8287;
